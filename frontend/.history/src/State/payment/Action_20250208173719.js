import { CREATE_PAYMENT_REQUEST, CREATE_PAYMENT_SUCCESS, CREATE_PAYMENT_FAILURE, GET_PAYMENT_REQUEST, GET_PAYMENT_SUCCESS, GET_PAYMENT_FAILURE, UPDATE_PAYMENT_REQUEST, UPDATE_PAYMENT_SUCCESS, UPDATE_PAYMENT_FAILURE } from "./ActionType";
import { api } from "../../config/Api_config";

export const createPaymentRequest = (orderId) =>
     async (dispatch) => {
        dispatch({ type: CREATE_PAYMENT_REQUEST})
        try {

            const {data} = await api.post(`/api/payments/${orderId}`);

            if(data.payment_link_url){
                window.location.href=data.payment_link_url;
            }
            dispatch({ type: CREATE_PAYMENT_SUCCESS, payload: data })

        } catch (error) {
            dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message })
        }
    
} 

export const updatePaymentRequest = (reqData) =>
    async (dispatch) => {
        dispatch({ type: UPDATE_PAYMENT_REQUEST});
        try {
            const { data } = await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId.orderId}`);
          
            dispatch({ type: UPDATE_PAYMENT_SUCCESS, payload: data })
        console.log("update payment",data);

        } catch (error) {
            dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: error.message })
        }
    }