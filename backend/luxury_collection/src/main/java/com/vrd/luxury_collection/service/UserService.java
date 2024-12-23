package com.vrd.luxury_collection.service;


import com.vrd.luxury_collection.exception.UserException;
import com.vrd.luxury_collection.model.User;

import java.util.Optional;


public interface UserService {
   public Optional<User> findUserById(Long userId) throws UserException;
    public Object findUserProfileByJwt(String jwt) throws UserException;


}
