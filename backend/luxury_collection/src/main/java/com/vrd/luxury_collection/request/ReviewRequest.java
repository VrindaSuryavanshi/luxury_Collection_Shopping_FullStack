package com.vrd.luxury_collection.request;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ReviewRequest {

    Long productId;
    private String review;
}
