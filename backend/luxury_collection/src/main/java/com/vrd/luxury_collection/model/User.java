package com.vrd.luxury_collection.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String firstName;
    private String lastName;
    private String Password;
    private String email;
    private String role;
    private String mobile;

    @OneToMany(mappedBy = "user" , cascade = CascadeType.ALL)
    private List<Address> addresses = new ArrayList<>();

    @Embedded
    @ElementCollection
    @CollectionTable(name = "payment_information",joinColumns=@JoinColumn(name="user_id"))
    private List<PaymentInformation> paymentInformation = new ArrayList<>();

    @OneToMany(mappedBy = "user" , cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Rating> ratings = new ArrayList<>();

    @OneToMany(mappedBy = "user" , cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Review> reviews = new ArrayList<>();

private LocalDateTime createdAt ;

public User(){

}
    public User(List<Address> addresses, LocalDateTime createdAt, String email, String firstName, String lastName, String mobile, String password, List<PaymentInformation> paymentInformation, List<Rating> ratings, List<Review> reviews, String role) {
        this.addresses = addresses;
        this.createdAt = createdAt;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobile = mobile;
        this.Password = password;
        this.paymentInformation = paymentInformation;
        this.ratings = ratings;
        this.reviews = reviews;
        this.role = role;
    }

    public List<Address> getAddresses() {
        return addresses;
    }

    public void setAddresses(List<Address> addresses) {
        this.addresses = addresses;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password.toString();
    }

    public List<PaymentInformation> getPaymentInformation() {
        return paymentInformation;
    }

    public void setPaymentInformation(List<PaymentInformation> paymentInformation) {
        this.paymentInformation = paymentInformation;
    }

    public List<Rating> getRatings() {
        return ratings;
    }

    public void setRatings(List<Rating> ratings) {
        this.ratings = ratings;
    }

    public List<Review> getReviews() {
        return reviews;
    }

    public void setReviews(List<Review> reviews) {
        this.reviews = reviews;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    @Override
    public String toString() {
        return "User{" +
                "addresses=" + addresses +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", Password='" + Password + '\'' +
                ", email='" + email + '\'' +
                ", role='" + role + '\'' +
                ", mobile='" + mobile + '\'' +
                ", paymentInformation=" + paymentInformation +
                ", ratings=" + ratings +
                ", reviews=" + reviews +
                ", createdAt=" + createdAt +
                '}';
    }
}
