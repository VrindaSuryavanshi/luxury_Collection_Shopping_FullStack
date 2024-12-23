package com.vrd.luxury_collection.service;

import com.vrd.luxury_collection.exception.ProductException;
import com.vrd.luxury_collection.model.Cart;
import com.vrd.luxury_collection.model.CartItem;
import com.vrd.luxury_collection.model.Product;
import com.vrd.luxury_collection.model.User;
import com.vrd.luxury_collection.repository.CartRepository;
import com.vrd.luxury_collection.request.AddItemRequest;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
@AllArgsConstructor

public class CartServiceImplementation implements CartService {

    @Autowired
    private CartRepository cartRepository;
    @Autowired
    private CartItemService cartItemService;
    @Autowired
    private ProductService productService;

    @Override
    public Cart createCart(User user) {
        Cart cart = new Cart();
        cart.setUser(user);
        return cartRepository.save(cart);
    }

    @Override
    public String addCartItem(Long userId, AddItemRequest req) throws ProductException {
       Cart cart = cartRepository.findByUserId(userId);
        Product product = productService.findProductById(req.getProductID());
        CartItem isPresent = cartItemService.isCartItemExist(cart,product,req.getSize(),userId);

        if (isPresent==null){
            CartItem cartItem = new CartItem();
            cartItem.setProduct(product);
            cartItem.setCart(cart);
            cartItem.setQuantity(req.getQuantity());
            cartItem.setUserId(userId);
int price = req.getQuantity()*product.getDiscountedPrice();
cartItem.setPrice(price);
cartItem.setSize(req.getSize());

CartItem createdCartItem = cartItemService.createCartItem(cartItem);
cart.getCartItems().add(createdCartItem);
        }
        return "Item added to card successfully...!";
    }

    @Override
    public String removeCartItem(Long userId, Product req) throws ProductException {
        Cart cart = cartRepository.findByUserId(userId);
        Product product = productService.findProductById(req.getId());

            if(product==null){
                throw new ProductException("product Not found with this id");
            }
        cart.getCartItems().remove(product);

        return "Item deleted from card successfully...!";
    }

    @Override
    public Cart findUserCart(Long userId) {

        Cart cart = cartRepository.findByUserId(userId);

        int totalPrice=0;
        int totalDiscountedPrice =0;
        int totalItem=0;

        for(CartItem cartItem: cart.getCartItems()){
            totalPrice=totalPrice + cartItem.getPrice();
            totalDiscountedPrice=totalDiscountedPrice + cartItem.getDiscountedPrice();
            totalItem=totalItem + cartItem.getQuantity();
        }
        cart.setTotalDiscountedPrice(totalDiscountedPrice);
        cart.setTotalItem(totalItem);
        cart.setTotalPrice(totalPrice);
        cart.setDiscount(totalPrice - totalDiscountedPrice);
        return cartRepository.save(cart);
    }
}
