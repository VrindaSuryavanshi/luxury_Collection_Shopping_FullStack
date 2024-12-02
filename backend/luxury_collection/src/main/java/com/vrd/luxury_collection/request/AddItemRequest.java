package com.vrd.luxury_collection.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AddItemRequest {

    private Long productID;
    private String size;
    private int quantity;
    private Integer price;

}
