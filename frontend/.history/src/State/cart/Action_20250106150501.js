import { api } from "../../config/Api_config";
import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

export const getCart = (jwt)=> async (dispatch)=>{

    dispatch({type:GET_CART_REQUEST});

    try {
       
        const {data} = await api.get(`/api/cart/`)
        console.log("cart items" , data);
        dispatch({type:GET_CART_SUCCESS,payload:data});

    } catch (error) {
        dispatch({type:GET_CART_FAILURE , payload:error.message});
    }
}

export const addItemToCart = (reqData) => async (dispatch) => {

    dispatch({ type: ADD_ITEM_TO_CART_REQUEST });

    try {
        const { data } = await api.put("/api/cart/add", reqData);
        console.log("API Response Data:", data);

        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
        console.log("Item added successfully, data dispatched:", data);
    } catch (error) {
        console.error("Error adding item to cart:", error.message);
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message });
    }
};


export const removeCartItem = (cartItemId)=>async (dispatch)=>{

    dispatch({type:REMOVE_CART_ITEM_REQUEST});

    try {
        const {data} = await api.delete(`/api/cart/cart_item/${cartItemId}`);

        dispatch({type:REMOVE_CART_ITEM_SUCCESS,payload:cartItemId});
        console.log("item removed successfully");
    } catch (error) {
        dispatch({type:REMOVE_CART_ITEM_FAILURE,payload:error.message})
    }
}

export const updateCartItem = (reqData)=>async (dispatch)=>{

    dispatch({type:UPDATE_CART_ITEM_REQUEST});
    console.log("item req data : ", reqData.data.cartItemId)

    try {
        const {data} = await api.put(`/api/cart/cart_item/${reqData.data.cartItemId}`{ quantity: reqData.data.quantity },);
        console.log("item updated with quantity n id : ", reqData.data.cartItemId)
        dispatch({type:UPDATE_CART_ITEM_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:UPDATE_CART_ITEM_FAILURE,payload:error.message})
    }
}