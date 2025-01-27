package com.vrd.luxury_collection.service;

import com.vrd.luxury_collection.exception.CartItemException;
import com.vrd.luxury_collection.exception.UserException;
import com.vrd.luxury_collection.model.Cart;
import com.vrd.luxury_collection.model.CartItem;
import com.vrd.luxury_collection.model.Product;
import com.vrd.luxury_collection.model.User;
import com.vrd.luxury_collection.repository.CartItemRepository;
import com.vrd.luxury_collection.repository.CartRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@NoArgsConstructor
@AllArgsConstructor
public class CartItemServiceImplementation  implements CartItemService{

    @Autowired
    private CartItemRepository cartItemRepository;
    @Autowired
    private UserService userService;
    @Autowired
    private CartRepository cartRepository;

    @Override
    public CartItem createCartItem(CartItem cartItem) {
        cartItem.setQuantity(1);
        cartItem.setPrice(cartItem.getProduct().getPrice()*cartItem.getQuantity());
        cartItem.setDiscountedPrice(cartItem.getProduct().getDiscountedPrice()*cartItem.getQuantity());

        CartItem createdCartItem =cartItemRepository.save(cartItem);
        return createdCartItem;
    }

    @Override
    public CartItem updateCartItem(Long userId, Long id,Integer quantity) throws CartItemException, UserException {

        CartItem item =findCartItemById(id);
        Optional<User> user =userService.findUserById(item.getUserId());

        if(user.get().getId().equals(userId)){
            item.setQuantity(quantity);
            item.setPrice(item.getQuantity()*item.getProduct().getPrice());
            item.setDiscountedPrice(item.getProduct().getDiscountedPrice()*item.getQuantity());
        }

        return cartItemRepository.save(item);

    }

    @Override
    public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId) {
        CartItem cartItem = cartItemRepository.isCartItemExist(cart,product,size,userId);
        return cartItem;
    }

    @Override
    public void removeCartItem(Long userId, Long cartItemId) throws CartItemException, UserException {

            CartItem cartItem = findCartItemById(cartItemId);

            Optional<User> user = userService.findUserById(cartItem.getUserId());
            Optional<User> reqUser = userService.findUserById(userId);

            if(user.get().getId().equals(reqUser.get().getId())){
                cartItemRepository.deleteById(cartItem.getId());
            }else {
                throw new UserException("you can't remove others items");
            }
    }

    @Override
    public CartItem findCartItemById(Long cartItemId) throws CartItemException {
        Optional<CartItem> opt = cartItemRepository.findById(cartItemId);

        if (opt.isPresent()){
            return opt.get();
        }
        throw new CartItemException("card Item not fount with this id"+cartItemId);
    }
}
