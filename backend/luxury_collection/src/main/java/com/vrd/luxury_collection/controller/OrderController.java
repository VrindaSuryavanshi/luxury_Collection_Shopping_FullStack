package com.vrd.luxury_collection.controller;

import com.vrd.luxury_collection.exception.OrderException;
import com.vrd.luxury_collection.exception.UserException;
import com.vrd.luxury_collection.model.Address;
import com.vrd.luxury_collection.model.Order;
import com.vrd.luxury_collection.model.User;
import com.vrd.luxury_collection.service.OrderService;
import com.vrd.luxury_collection.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private UserService userService;

    @PostMapping("/")
    public ResponseEntity<Order> createOrder(@RequestBody Address shippingAddress,
                                             @RequestHeader("Authorization") String jwt) throws UserException{
        Optional<User> user = (Optional<User>) userService.findUserProfileByJwt(jwt);

        Order order = orderService.createOrder(user, shippingAddress);

        System.out.println("order " + order);

        return new ResponseEntity<>(order, HttpStatus.CREATED);
    }

    @GetMapping("/user")
    public ResponseEntity<List<Order>> usersOrderHistory(@RequestHeader("Authorization") String jwt) throws UserException{

        Optional<User> user = (Optional<User>) userService.findUserProfileByJwt(jwt);

        List<Order> orders = orderService.usersOrderHistory(user.get().getId());
        return new ResponseEntity<>(orders,HttpStatus.CREATED);

    }

@GetMapping("/{id}")
    public ResponseEntity<Order> findOrderById(
            @PathVariable("id") Long orderId,
            @RequestHeader("Authorization") String jwt) throws UserException , OrderException{

    Optional<User> user = (Optional<User>) userService.findUserProfileByJwt(jwt);

        Order order = orderService.findOrderById(orderId);

        return new ResponseEntity<>(order ,HttpStatus.ACCEPTED);

    }
}
