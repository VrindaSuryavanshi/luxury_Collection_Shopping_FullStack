package com.vrd.luxury_collection.repository;

import com.vrd.luxury_collection.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
}
