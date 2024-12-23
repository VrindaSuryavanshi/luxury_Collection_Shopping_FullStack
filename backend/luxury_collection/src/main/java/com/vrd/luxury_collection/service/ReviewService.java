package com.vrd.luxury_collection.service;

import com.vrd.luxury_collection.exception.ProductException;
import com.vrd.luxury_collection.model.Review;
import com.vrd.luxury_collection.model.User;
import com.vrd.luxury_collection.request.ReviewRequest;

import java.util.List;
import java.util.Optional;

public interface ReviewService {

    public Review createReview(ReviewRequest req , User user) throws ProductException;
    public List<Review> getAllReview(Long productId);
}
