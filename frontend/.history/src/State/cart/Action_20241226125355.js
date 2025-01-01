import { ADD_ITEM_TO_CART_FAILURE, ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, REMOVE_CART_ITEM_FAILURE, REMOVE_CART_ITEM_REQUEST, REMOVE_CART_ITEM_SUCCESS, UPDATE_CART_ITEM_FAILURE, UPDATE_CART_ITEM_REQUEST, UPDATE_CART_ITEM_SUCCESS } from "./ActionType"

 export const addItemToCart = (reqData)=>(dispatch)=>{

    dispatch({type:ADD_ITEM_TO_CART_REQUEST});

    try {
        const {data} = api.put("/api/cart/add",reqData.data);
        dispatch({type:ADD_ITEM_TO_CART_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:ADD_ITEM_TO_CART_FAILURE,payload:error.message})
    }
}

export const removeCartItem = (reqData)=>(dispatch)=>{

    dispatch({type:REMOVE_CART_ITEM_REQUEST});

    try {
        const {data} = api.delete(`/api/cart_item/${reqData.cartItemId}`);
        dispatch({type:REMOVE_CART_ITEM_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:REMOVE_CART_ITEM_FAILURE,payload:error.message})
    }
}

export const updateCartItem = (reqData)=>(dispatch)=>{

    dispatch({type:UPDATE_CART_ITEM_REQUEST});

    try {
        const {data} = api.put(`/api/cart_item/${reqData.cartItemId}`, reqData.data);
        dispatch({type:UPDATE_CART_ITEM_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:UPDATE_CART_ITEM_FAILURE,payload:error.message})
    }
}