package com.vrd.luxury_collection.service;

import com.vrd.luxury_collection.exception.ProductException;
import com.vrd.luxury_collection.model.Cart;
import com.vrd.luxury_collection.model.Product;
import com.vrd.luxury_collection.model.User;
import com.vrd.luxury_collection.request.AddItemRequest;

public interface CartService {

    public Cart createCart(User user);

    public String addCartItem(Long userId, AddItemRequest req) throws ProductException;

    public String removeCartItem(Long userId, Product req) throws ProductException;

    public Cart findUserCart(Long userId);
}
