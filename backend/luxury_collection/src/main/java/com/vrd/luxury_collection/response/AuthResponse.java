package com.vrd.luxury_collection.response;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class AuthResponse {
    private String jwt;
    private String message;

    public AuthResponse(String jwt, String message) {
        super();
        this.jwt = jwt;
        this.message = message;
    }

    public AuthResponse() {
    }

}
