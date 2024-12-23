package com.vrd.luxury_collection.service;

import com.vrd.luxury_collection.exception.ProductException;
import com.vrd.luxury_collection.model.Product;
import com.vrd.luxury_collection.model.Rating;
import com.vrd.luxury_collection.model.User;
import com.vrd.luxury_collection.repository.RatingRepository;
import com.vrd.luxury_collection.request.RatingRequest;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@NoArgsConstructor
@AllArgsConstructor
public class RatingServiceImplementation implements RatingService{

    private RatingRepository ratingRepository;
    private ProductService productService;

    @Override
    public Rating createRating(RatingRequest req, User user) throws ProductException {
        Product product =productService.findProductById(req.getProductId());

        Rating rating = new Rating();
        rating.setProduct(product);
        rating.setUser(user);
        rating.setRating(req.getRating());
        rating.setCreatedAt(LocalDateTime.now());
        return ratingRepository.save(rating);
    }

    @Override
    public List<Rating> getProductsRating(Long productId) {
        return ratingRepository.getAllProductsRating(productId);
    }
}
