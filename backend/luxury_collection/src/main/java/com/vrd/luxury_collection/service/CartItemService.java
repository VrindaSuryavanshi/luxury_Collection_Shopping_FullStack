package com.vrd.luxury_collection.service;

import com.vrd.luxury_collection.exception.CartItemException;
import com.vrd.luxury_collection.exception.UserException;
import com.vrd.luxury_collection.model.Cart;
import com.vrd.luxury_collection.model.CartItem;
import com.vrd.luxury_collection.model.Product;

public interface CartItemService {

    public CartItem createCartItem(CartItem cartItem);

    public CartItem updateCartItem(Long userId,Long id,Integer quantity) throws
            CartItemException, UserException;

    public CartItem isCartItemExist(Cart cart , Product product ,String size,Long userId);

    public void removeCartItem(Long UserId, Long cartItemId) throws
            CartItemException, UserException;

    public CartItem findCartItemById(Long cartItemId) throws
            CartItemException;
}
