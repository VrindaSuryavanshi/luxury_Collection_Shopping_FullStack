package com.vrd.luxury_collection.service;

import com.vrd.luxury_collection.exception.ProductException;
import com.vrd.luxury_collection.model.Rating;
import com.vrd.luxury_collection.model.User;
import com.vrd.luxury_collection.request.RatingRequest;

import java.util.List;
import java.util.Optional;

public interface RatingService {

    public Rating createRating(RatingRequest req, User user) throws ProductException;
    public List<Rating> getProductsRating(Long productId);
}
