package com.vrd.luxury_collection.service;

import com.vrd.luxury_collection.exception.OrderException;
import com.vrd.luxury_collection.model.*;
import com.vrd.luxury_collection.repository.*;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class OrderServiceImplementation implements OrderService{

    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private CartService cartService;
    @Autowired
    private ProductService productService;
    @Autowired
    private AddressRepository addressRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private OrderItemService orderItemService;
    @Autowired
    private OrderItemRepository orderItemRepository;



    @Override
    public Order createOrder(Optional<User> user, Address shippingAddress) {

        Optional<User> optionalUser = userRepository.findById(user.get().getId());
        User newuser = optionalUser.orElseThrow(() -> new EntityNotFoundException("User not found with id: "+user.get().getId()));
       shippingAddress.setUser(newuser);

       Address address = addressRepository.save(shippingAddress);
       user.get().getAddresses().add(address);

        userRepository.save(newuser);

        Cart cart = cartService.findUserCart(newuser.getId());
        List<OrderItem> orderItems=new ArrayList<>();

        for (CartItem item : cart.getCartItems()) {

            OrderItem orderItem = new OrderItem();

            orderItem.setPrice(item.getPrice());
            orderItem.setProduct(item.getProduct());
            orderItem.setQuantity(item.getQuantity());
            orderItem.setSize(item.getSize());
            orderItem.setUserId(item.getUserId());
            orderItem.setDiscountedPrice(item.getDiscountedPrice());


            OrderItem createdOrderItem = orderItemRepository.save(orderItem);

            orderItems.add(createdOrderItem);
        }
            Order createdOrder = new Order();
            createdOrder.setUser(newuser);
            createdOrder.setOrderItems(orderItems);
            createdOrder.setTotalPrice(cart.getTotalPrice());
            createdOrder.setTotalDiscountedPrice(cart.getTotalDiscountedPrice());
            createdOrder.setDiscount(cart.getDiscount());
            createdOrder.setTotalItems(cart.getTotalItem());

            createdOrder.setShippingAddress(address);
            createdOrder.setOrderDate(LocalDateTime.now());
            createdOrder.setOrderStatus("Pending");
            createdOrder.getPaymentDetails().setStatus("Pending");
            createdOrder.setCreatedAt(LocalDateTime.now());

            Order savedOrder = orderRepository.save(createdOrder);

            for (OrderItem item : orderItems){
                item.setOrder(savedOrder);
                orderItemRepository.save(item);
        }
        return savedOrder;
    }

    @Override
    public Order findOrderById(Long orderId) throws OrderException {
      Optional<Order> opt = orderRepository.findById(orderId);

      if (opt.isPresent()){
          return opt.get();
      }
        throw new OrderException("Order not exist with id "+orderId);
    }

    @Override
    public List<Order> usersOrderHistory(Long userId) {
        List<Order> orders = orderRepository.getUsersOrders(userId);
        return orders;
    }

    @Override
    public Order placedOrder(Long orderId) throws OrderException {

        Order order = findOrderById(orderId);
        order.setOrderStatus("PLACED");
        order.getPaymentDetails().setStatus("Completed");
        return order;
    }

    @Override
    public Order confirmedOrder(Long orderId) throws OrderException {
        Order order = findOrderById(orderId);
        order.setOrderStatus("CONFIRMED");
        return orderRepository.save(order);
    }

    @Override
    public Order shippedOrder(Long orderId) throws OrderException {
        Order order = findOrderById(orderId);
        order.setOrderStatus("SHIPPED");
        return orderRepository.save(order);
    }

    @Override
    public Order deliveredOrder(Long orderId) throws OrderException {
        Order order = findOrderById(orderId);
        order.setOrderStatus("DELIVERED");
        return orderRepository.save(order);
    }

    @Override
    public Order cancelOrder(Long orderId) throws OrderException {
        Order order = findOrderById(orderId);
        order.setOrderStatus("Cancelled");
        return orderRepository.save(order);
    }

    @Override
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    @Override
    public void deleteOrder(Long orderId) throws OrderException {
        Order order = findOrderById(orderId);
        orderRepository.deleteById(orderId);
    }
}
