package com.vrd.luxury_collection.controller;

import com.razorpay.Payment;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.vrd.luxury_collection.exception.OrderException;
import com.vrd.luxury_collection.model.Order;
import com.vrd.luxury_collection.repository.OrderRepository;
import com.vrd.luxury_collection.response.ApiResponse;
import com.vrd.luxury_collection.response.PaymentLinkResponse;
import com.vrd.luxury_collection.service.OrderService;
import com.vrd.luxury_collection.service.UserService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class PaymentController {

    @Value("${razorpay.api.key}")
    private String apiKey;

    @Value("${razorpay.api.key.secrete}")
    private String apiSecret;

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;

    @Autowired
    private OrderRepository orderRepository;

    @RequestMapping("/payments/{orderId}")
    public ResponseEntity<PaymentLinkResponse> cretePaymentLink(@PathVariable Long orderId,@RequestHeader("Authorization") String jwt) throws OrderException, RazorpayException {

        Order order = orderService.findOrderById(orderId);
        try {
            RazorpayClient razorpayClient = new RazorpayClient(apiKey, apiSecret);
            System.out.println("Razorpay Client initialized.");

            JSONObject paymentLinkRequest = new JSONObject();
            paymentLinkRequest.put("amount", order.getTotalPrice() * 100);
            paymentLinkRequest.put("currency", "INR");

            JSONObject customer = new JSONObject();
            customer.put("name", order.getUser().getFirstName());
            customer.put("email", order.getUser().getEmail());
            paymentLinkRequest.put("customer", customer);

            JSONObject notify = new JSONObject();
            notify.put("sms", true);
            notify.put("email", true);
            paymentLinkRequest.put("notify", notify);

            paymentLinkRequest.put("callback_url", "http://localhost:3000/payment/" + orderId);
            paymentLinkRequest.put("callback_method", "get");

            System.out.println("Payment Link Request: " + paymentLinkRequest);

            PaymentLink paymentLink = razorpayClient.paymentLink.create(paymentLinkRequest);
            System.out.println("Payment Link Created: " + paymentLink);


            String paymentLinkId = paymentLink.get("id");
            String paymentLinkUrl = paymentLink.get("short_url");
            System.out.println("razorpay paymentLink Req: id  " + paymentLinkId);
            System.out.println("razorpay paymentLink Req: url  " + paymentLinkUrl);


            PaymentLinkResponse res = new PaymentLinkResponse();
            res.setPayment_link_id(paymentLinkId);
            res.setPayment_link_url(paymentLinkUrl);
            System.out.println(" Res is  " + res);

            return new ResponseEntity<PaymentLinkResponse>(res, HttpStatus.CREATED);

        } catch (RazorpayException e) {
            System.err.println("Error creating payment link: " + e.getMessage());
            e.printStackTrace();
            return null;

        }
 }


    @GetMapping("/payments")
    public ResponseEntity<ApiResponse> redirect(@RequestParam(name="payment_id") String paymentId,
                                                @RequestParam(name="order_id") Long orderId)
            throws OrderException, RazorpayException {
        Order order = orderService.findOrderById(orderId);
        RazorpayClient razorpayClient = new RazorpayClient(apiKey,apiSecret);

        try {
            Payment payment = razorpayClient.payments.fetch(paymentId);
            if(payment.get("status").equals("capture")){
                order.getPaymentDetails().setPaymentId(paymentId);
                order.getPaymentDetails().setStatus("COMPLETED");
                order.setOrderStatus("PLACED");
                orderRepository.save(order);
            }
System.out.println("order id  "+orderId+"  p id : " +paymentId);
            ApiResponse apiResponse = new ApiResponse();
            apiResponse.setMessage("Your Order Get Placed");
            apiResponse.setSuccess(true);

            return new ResponseEntity<ApiResponse>(apiResponse,HttpStatus.ACCEPTED);
        } catch (Exception e) {
            throw new RazorpayException(e.getMessage());
        }

    }


}
