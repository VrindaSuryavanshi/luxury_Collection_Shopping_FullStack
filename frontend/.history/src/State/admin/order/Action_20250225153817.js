

export const getOrders = () => {

    return async (dispatch) => {
        dispatch({ type: GET_ORDER_REQUEST });
        
    try {
        const response = await api.get("/api/admin/orders/");
        console.log("Order data all is here", response.data );
        dispatch({ type: GET_ORDER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: GET_ORDER_FAILURE, payload: error.message });
    }
}
}

export const confirmOrder = (orderId) => {

    return async (dispatch) => {
        dispatch({ type: CONFIRMED_ORDER_REQUEST });
        
    try {
        const response = await api.put(`/api/admin/orders/${orderId}/confirmed`);
        console.log("Order data all is here", response.data );
        dispatch({ type: CONFIRMED_ORDER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: CONFIRMED_ORDER_FAILURE, payload: error.message });
    }
}
}

export const placeOrder = (orderId) => {

    return async (dispatch) => {
        dispatch({ type: PLACED_ORDER_REQUEST });
        
    try {
        const response = await api.put(`/api/admin/orders/${orderId}/placed`);
        console.log("Order data all is here", response.data );
        dispatch({ type: PLACED_ORDER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: PLACED_ORDER_FAILURE, payload: error.message });
    }
}
}

export const shipOrder = (orderId) => {

    return async (dispatch) => {
        dispatch({ type: SHIPPED_ORDER_REQUEST });
        
    try {
        const response = await api.put(`/api/admin/orders/${orderId}/shipped`);
        console.log("Order data all is here", response.data );
        dispatch({ type: SHIPPED_ORDER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: SHIPPED_ORDER_FAILURE, payload: error.message });
    }
}
}   

export const deliverOrder = (orderId) => {

    return async (dispatch) => {
        dispatch({ type: DELIVERED_ORDER_REQUEST });
        
    try {
        const response = await api.put(`/api/admin/orders/${orderId}/delivered`);
        console.log("Order data all is here", response.data );
        dispatch({ type: DELIVERED_ORDER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: DELIVERED_ORDER_FAILURE, payload: error.message });
    }
}
}

export const cancelOrder = (orderId) => {

    return async (dispatch) => {
        dispatch({ type: CANCEL_ORDER_REQUEST });
        
    try {
        const response = await api.put(`/api/admin/orders/${orderId}/cancelled`);
        console.log("Order data all is here", response.data );
        dispatch({ type: CANCEL_ORDER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: CANCEL_ORDER_FAILURE, payload: error.message });
    }
}
}

export const deleteOrder = (orderId) => {

    return async (dispatch) => {
        dispatch({ type: DELETE_ORDER_REQUEST });
        
    try {
        const response = await api.delete(`/api/admin/orders/${orderId}/delete`);
        console.log("Order data all is here", response.data );
        dispatch({ type: DELETE_ORDER_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: DELETE_ORDER_FAILURE, payload: error.message });
    }
}
}



