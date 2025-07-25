package com.vrd.luxury_collection.repository;

import com.vrd.luxury_collection.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order,Long> {

    @Query("Select o from Order o Where o.user.id=:userId AND" +
            " (o.orderStatus = 'PLACED' OR o.orderStatus = 'CONFIRMED' OR" +
            " o.orderStatus = 'SHIPPED' OR o.orderStatus ='DELIVERED')")
    public List<Order> getUsersOrders(@Param("userId") Long userId);
}
