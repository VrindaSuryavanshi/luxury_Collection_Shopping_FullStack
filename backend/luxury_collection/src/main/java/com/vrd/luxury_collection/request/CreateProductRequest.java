package com.vrd.luxury_collection.request;

import com.vrd.luxury_collection.model.Size;

import java.util.HashSet;
import java.util.Set;

public class CreateProductRequest {

    private String title;
    private String description;
    private int price;

    private String discountedPrice;
    private String discountedPresent;

    private int quantity;
    private String brand;
    private String color;
    private Set<Size> size = new HashSet<>();

    private String imgUrl;

    private String topLevelCategory;
    private String secondLevelCategory;
    private String thirdLevelCategory;

    public CreateProductRequest(String brand, String color, String description, String discountedPresent, String discountedPrice, String imgUrl, int price, int quantity, String secondLevelCategory, Set<Size> size, String thirdLevelCategory, String title, String topLevelCategory) {

        this.brand = brand;
        this.color = color;
        this.description = description;
        this.discountedPresent = discountedPresent;
        this.discountedPrice = discountedPrice;
        this.imgUrl = imgUrl;
        this.price = price;
        this.quantity = quantity;
        this.secondLevelCategory = secondLevelCategory;
        this.size = size;
        this.thirdLevelCategory = thirdLevelCategory;
        this.title = title;
        this.topLevelCategory = topLevelCategory;
    }

    public CreateProductRequest() {
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDiscountedPresent() {
        return discountedPresent;
    }

    public void setDiscountedPresent(String discountedPresent) {
        this.discountedPresent = discountedPresent;
    }

    public int getDiscountedPrice() {
        return discountedPrice;
    }

    public void setDiscountedPrice(String discountedPrice) {
        this.discountedPrice = discountedPrice;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getSecondLevelCategory() {
        return secondLevelCategory;
    }

    public void setSecondLevelCategory(String secondLevelCategory) {
        this.secondLevelCategory = secondLevelCategory;
    }

    public Set<Size> getSize() {
        return size;
    }

    public void setSize(Set<Size> size) {
        this.size = size;
    }

    public String getThirdLevelCategory() {
        return thirdLevelCategory;
    }

    public void setThirdLevelCategory(String thirdLevelCategory) {
        this.thirdLevelCategory = thirdLevelCategory;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getTopLevelCategory() {
        return topLevelCategory;
    }

    public void setTopLevelCategory(String topLevelCategory) {
        this.topLevelCategory = topLevelCategory;
    }
}
