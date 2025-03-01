package com.vrd.luxury_collection.controller;

import com.vrd.luxury_collection.exception.OrderException;
import com.vrd.luxury_collection.model.Order;
import com.vrd.luxury_collection.response.ApiResponse;
import com.vrd.luxury_collection.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/orders")

public class AdminOrderController {
    @Autowired
    private OrderService orderService;

    @GetMapping("/")
    public ResponseEntity<List<Order>> getAllOrdersHandler(){
        List<Order> orders = orderService.getAllOrders();
        return new ResponseEntity<List<Order>>(orders , HttpStatus.ACCEPTED);
    }

    @PutMapping("/{orderId}/confirmed")
    public ResponseEntity<Order> confirmedOrderHandler(@PathVariable Long orderId,
                                                       @RequestHeader("Authorization")String jwt)throws OrderException{

        Order order = orderService.confirmedOrder(orderId);

        return new ResponseEntity<>(order,HttpStatus.OK);
           }

    @PutMapping("/{orderId}/placed")
    public ResponseEntity<Order> placedOrderHandler(@PathVariable Long orderId,
                                                       @RequestHeader("Authorization")String jwt)throws OrderException{

        Order order = orderService.placedOrder(orderId);

        return new ResponseEntity<>(order,HttpStatus.OK);
    }

    @PutMapping("/{orderId}/shipped")
    public ResponseEntity<Order> shippedOrderHandler(@PathVariable Long orderId,
                                                       @RequestHeader("Authorization")String jwt)throws OrderException{

        Order order = orderService.shippedOrder(orderId);

        return new ResponseEntity<>(order,HttpStatus.OK);
    }

    @PutMapping("/{orderId}/delivered")
    public ResponseEntity<Order> deliverOrderHandler(@PathVariable Long orderId,
                                                       @RequestHeader("Authorization")String jwt)throws OrderException{

        Order order = orderService.deliveredOrder(orderId);

        return new ResponseEntity<>(order,HttpStatus.OK);
    }

    @PutMapping("/{orderId}/cancelled")
    public ResponseEntity<Order> cancelOrderHandler(@PathVariable Long orderId,
                                                       @RequestHeader("Authorization")String jwt)throws OrderException{

        Order order = orderService.cancelOrder(orderId);

        return new ResponseEntity<>(order,HttpStatus.OK);
    }

    @DeleteMapping("/{orderId}/deleted")
    public ResponseEntity<ApiResponse> deleteOrderHandler(@PathVariable Long orderId,
                                                    @RequestHeader("Authorization")String jwt) throws OrderException {
        orderService.deleteOrder(orderId);

        ApiResponse res =new ApiResponse();
        res.setMessage("order deleted successfully");
        res.setSuccess(true);

        return new ResponseEntity<>(res,HttpStatus.OK);

    }


}
