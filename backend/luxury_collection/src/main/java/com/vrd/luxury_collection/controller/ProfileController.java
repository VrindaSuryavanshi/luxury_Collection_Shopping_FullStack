package com.vrd.luxury_collection.controller;

import com.vrd.luxury_collection.exception.UserException;
import com.vrd.luxury_collection.model.User;
import com.vrd.luxury_collection.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
@RestController
@RequestMapping("/api")
public class ProfileController {

    @Autowired
    private UserService userService;

    @GetMapping("/user/profile")
    public ResponseEntity<Optional<User>> findUserProfile(@RequestHeader("Authorization")String jwt) throws UserException {

        Optional<User> user = (Optional<User>) userService.findUserProfileByJwt(jwt);

        return new ResponseEntity<Optional<User>>(user, HttpStatus.OK);
    }
}
