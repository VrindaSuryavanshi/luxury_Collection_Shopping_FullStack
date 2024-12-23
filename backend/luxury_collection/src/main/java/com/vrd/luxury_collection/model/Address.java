package com.vrd.luxury_collection.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Optional;

@Entity
@Table(name = "addresses")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Address {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "street_address")
    private String streetAddress;

    @Column(name = "city")
    private String city;

    @Column(name = "state")
    private String state;

    @Column(name = "zip_code")
    private String zipCode;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;

    private String mobile;




//    public Address(String city, String firstName, Long id, String lastName, String mobile, String state, String streetAddress, User user, String zipCode) {
//        this.city = city;
//        this.firstName = firstName;
//        this.id = id;
//        this.lastName = lastName;
//        this.mobile = mobile;
//        this.state = state;
//        this.streetAddress = streetAddress;
//        this.user = user;
//        this.zipCode = zipCode;
//    }


}
