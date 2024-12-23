package com.vrd.luxury_collection.service;

import com.vrd.luxury_collection.config.JwtProvider;
import com.vrd.luxury_collection.exception.UserException;
import com.vrd.luxury_collection.model.User;
import com.vrd.luxury_collection.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService{


    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtProvider jwtProvider;

    public UserServiceImplementation() {
    }

    public UserServiceImplementation(JwtProvider jwtProvider, UserRepository userRepository) {
        this.jwtProvider = jwtProvider;
        this.userRepository = userRepository;
    }

    @Override
    public Optional<User> findUserById(Long userId) throws UserException {
        Optional<User> user = userRepository.findById(userId);
        if(user.isPresent()){
            return Optional.of(user.get());
        }
        throw new UserException("User not found with id" + userId);
    }

    @Override
    public Optional<User> findUserProfileByJwt(String jwt) throws UserException {

        String email =jwtProvider.getEmailFromToken(jwt);

        Optional<User> user = Optional.ofNullable(userRepository.findByEmail(email));

        if(user.isEmpty()){
            throw  new UserException("User not found with this email" + email);
        }

        return user;
    }

}
