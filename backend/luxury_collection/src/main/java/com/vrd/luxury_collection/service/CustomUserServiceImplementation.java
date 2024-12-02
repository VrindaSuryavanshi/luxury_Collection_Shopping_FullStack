package com.vrd.luxury_collection.service;

import com.vrd.luxury_collection.model.User;
import com.vrd.luxury_collection.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CustomUserServiceImplementation implements UserDetailsService {

    private UserRepository userRepository;

    public CustomUserServiceImplementation(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User> user =userRepository.findByEmail(username);
        if (user.isEmpty()){
            throw new UsernameNotFoundException("User not found with email"+ username);
        }
        List<GrantedAuthority> authorities= new ArrayList<>();

        return new org.springframework.security.core.userdetails.User(user.get().getEmail(), user.get().getPassword(),authorities);
    }
}
