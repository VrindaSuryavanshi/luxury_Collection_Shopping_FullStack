package com.vrd.luxury_collection.repository;

import com.vrd.luxury_collection.model.Rating;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RatingRepository extends JpaRepository<Rating ,Long> {

    @Query("select r from Rating r Where r.product.id=:productId")
    public List<Rating> getAllProductsRating(@Param("productId")Long productId);
}
