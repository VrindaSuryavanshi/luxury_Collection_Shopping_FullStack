package com.vrd.luxury_collection.service;

import com.vrd.luxury_collection.exception.OrderException;
import com.vrd.luxury_collection.model.Address;
import com.vrd.luxury_collection.model.Order;
import com.vrd.luxury_collection.model.User;

import java.util.List;

public interface OrderService {

    public Order createOrder(User user , Address shippingAddress);

    public Order findOrderById(Long OrderId) throws OrderException;

    public List<Order> usersOrderHistory(Long userId);

    public Order placedOrder(Long orderId) throws OrderException;

    public Order confirmedOrder(Long orderId) throws OrderException;

    public Order shippedOrder(Long orderId) throws OrderException;

    public Order deliveredOrder(Long orderId) throws OrderException;

    public List<Order> getAllOrders();

    public void deleteOrder(Long orderId) throws OrderException;

}
