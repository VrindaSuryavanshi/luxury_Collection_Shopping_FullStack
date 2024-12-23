package com.vrd.luxury_collection.controller;

import com.vrd.luxury_collection.exception.ProductException;
import com.vrd.luxury_collection.exception.UserException;
import com.vrd.luxury_collection.model.Rating;
import com.vrd.luxury_collection.model.User;
import com.vrd.luxury_collection.request.RatingRequest;
import com.vrd.luxury_collection.service.RatingService;
import com.vrd.luxury_collection.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ratings")
public class RatingController {

    @Autowired
    private UserService userService;

    @Autowired
    private RatingService ratingService;

    @PostMapping("/create")
    public ResponseEntity<Rating> createRating(@RequestBody RatingRequest request,
                                               @RequestHeader("Authorization") String jwt) throws UserException , ProductException {

        User user = (User) userService.findUserProfileByJwt(jwt);

        Rating rating = ratingService.createRating(request, user);

        return new ResponseEntity<>(rating, HttpStatus.CREATED);
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Rating>> getProductsRating(@RequestBody Long productId,
                                                         @RequestHeader("Authorization") String jwt) throws UserException , ProductException {

        User user = (User) userService.findUserProfileByJwt(jwt);

        List<Rating> rating = ratingService.getProductsRating(productId);

        return new ResponseEntity<>(rating, HttpStatus.ACCEPTED);

    }
}
