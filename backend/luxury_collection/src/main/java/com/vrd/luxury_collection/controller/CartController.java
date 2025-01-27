package com.vrd.luxury_collection.controller;

import com.vrd.luxury_collection.exception.CartItemException;
import com.vrd.luxury_collection.exception.ProductException;
import com.vrd.luxury_collection.exception.UserException;
import com.vrd.luxury_collection.model.Cart;
import com.vrd.luxury_collection.model.CartItem;
import com.vrd.luxury_collection.model.Product;
import com.vrd.luxury_collection.model.User;
import com.vrd.luxury_collection.request.AddItemRequest;
import com.vrd.luxury_collection.response.ApiResponse;
import com.vrd.luxury_collection.service.CartItemService;
import com.vrd.luxury_collection.service.CartService;
import com.vrd.luxury_collection.service.UserService;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/cart")

public class CartController {

    @Autowired
    private UserService userService;

    @Autowired
    private  CartService cartService;

    @Autowired
    CartItemService cartItemService;

    @GetMapping("/")
    public ResponseEntity<Cart> findUserCart(@RequestHeader("Authorization")String jwt) throws UserException {

        Optional<User> user = (Optional<User>) userService.findUserProfileByJwt(jwt);

        Cart cart = cartService.findUserCart(user.get().getId());

        return new ResponseEntity<Cart>(cart, HttpStatus.OK);

    }

    @PutMapping("/add")
    private ResponseEntity<ApiResponse> addItemToCart(@RequestBody AddItemRequest req ,
                                                      @RequestHeader("Authorization") String jwt) throws UserException, ProductException {

        try {
            Optional<User> user = (Optional<User>) userService.findUserProfileByJwt(jwt);
            cartService.addCartItem(user.get().getId(), req);

            ApiResponse res = new ApiResponse();
            res.setMessage("Item added to cart successfully");
            res.setSuccess(true);

            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace(); // Log the stack trace for debugging
            return new ResponseEntity<>(new ApiResponse(false, e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/cart_item/{cartId}")
    private ResponseEntity<ApiResponse> removeItemFromCart(@PathVariable Long cartId,@RequestHeader("Authorization") String jwt)
            throws UserException, CartItemException {

        Optional<User> user = (Optional<User>) userService.findUserProfileByJwt(jwt);

            cartItemService.removeCartItem(user.get().getId(), cartId);

        ApiResponse res = new ApiResponse();

        res.setMessage("item deleted from card Successfully");
            res.setSuccess(true);

            return new ResponseEntity<>(res, HttpStatus.OK);


    }

    @PutMapping("/cart_item/{cartItemId}")
    private ResponseEntity<ApiResponse> updateCartItem(@PathVariable Long cartItemId,
                                                       @RequestBody Map<String, Object> body
                                                        ,@RequestHeader("Authorization") String jwt)
            throws UserException, CartItemException {

        Optional<User> user = (Optional<User>) userService.findUserProfileByJwt(jwt);
        Integer quantity = (Integer) body.get("quantity");
        cartItemService.updateCartItem(user.get().getId(), cartItemId,quantity);

        ApiResponse res = new ApiResponse();

        res.setMessage("item updated Successfully");
        res.setSuccess(true);

        return new ResponseEntity<>(res, HttpStatus.OK);


    }
    }
