package com.vrd.luxury_collection.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RatingRequest {
    private Long productId;
    private double rating;
}
