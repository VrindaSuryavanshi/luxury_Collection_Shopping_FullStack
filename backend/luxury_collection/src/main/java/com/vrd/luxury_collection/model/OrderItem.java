package com.vrd.luxury_collection.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;


@Entity
@Getter
@Setter
@AllArgsConstructor
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @JsonIgnore
    @ManyToOne
    private Order order;

    @ManyToOne
    private Product product;

    private  Long userId;

    private String size;
    private int quantity;
    private Integer price;
    private Integer discountedPrice;
    private LocalDateTime deliveryDate;

    public OrderItem() {
    }

    public OrderItem(LocalDateTime deliveryDate, Integer discountedPrice, Long id, Order order, Integer price, Product product, int quantity, String size) {
        this.deliveryDate = deliveryDate;
        this.discountedPrice = discountedPrice;
        this.id = id;
        this.order = order;
        this.price = price;
        this.product = product;
        this.quantity = quantity;
        this.size = size;
    }

}
