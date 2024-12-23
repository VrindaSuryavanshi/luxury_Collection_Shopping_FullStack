package com.vrd.luxury_collection.service;

import com.vrd.luxury_collection.exception.ProductException;
import com.vrd.luxury_collection.model.Product;
import com.vrd.luxury_collection.model.Review;
import com.vrd.luxury_collection.model.User;
import com.vrd.luxury_collection.repository.ProductRepository;
import com.vrd.luxury_collection.repository.ReviewRepository;
import com.vrd.luxury_collection.request.ReviewRequest;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@NoArgsConstructor
@AllArgsConstructor
public class ReviewServiceImplementation implements ReviewService {

    private ReviewRepository reviewRepository;
    private ProductRepository productRepository;
    private ProductService productService;

    @Override
    public Review createReview(ReviewRequest req, User user) throws ProductException {
        Product product = productService.findProductById(req.getProductId());

        Review review =new Review();
        review.setUser(user);
        review.setProduct(product);
        review.setReview(req.getReview());
        review.setCreatedAt(LocalDateTime.now());

        return reviewRepository.save(review);

    }

    @Override
    public List<Review> getAllReview(Long productId) {
        return reviewRepository.getAllProductsReview(productId);
    }
}
