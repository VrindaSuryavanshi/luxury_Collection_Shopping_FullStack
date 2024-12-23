package com.vrd.luxury_collection.controller;

import com.vrd.luxury_collection.exception.ProductException;
import com.vrd.luxury_collection.exception.UserException;
import com.vrd.luxury_collection.model.Rating;
import com.vrd.luxury_collection.model.Review;
import com.vrd.luxury_collection.model.User;
import com.vrd.luxury_collection.request.RatingRequest;
import com.vrd.luxury_collection.request.ReviewRequest;
import com.vrd.luxury_collection.service.RatingService;
import com.vrd.luxury_collection.service.ReviewService;
import com.vrd.luxury_collection.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private UserService userService;

    @Autowired
    private ReviewService reviewService;

    @PostMapping("/create")
    public ResponseEntity<Review> createRating(@RequestBody ReviewRequest request,
                                               @RequestHeader("Authorization") String jwt) throws UserException, ProductException {

        User user = (User) userService.findUserProfileByJwt(jwt);

        Review review = reviewService.createReview(request, user);

        return new ResponseEntity<>(review, HttpStatus.CREATED);
    }

    @GetMapping("/product/{productId}")
    public ResponseEntity<List<Review>> getProductsRating(@RequestBody Long productId,
                                                          @RequestHeader("Authorization") String jwt) throws UserException , ProductException {

        User user = (User) userService.findUserProfileByJwt(jwt);

        List<Review> reviews = reviewService.getAllReview(productId);

        return new ResponseEntity<>(reviews, HttpStatus.ACCEPTED);

    }
}
