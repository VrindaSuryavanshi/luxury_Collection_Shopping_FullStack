import { useNavigate } from "react-router-dom";
import { api } from "../../config/Api_config";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS } from "./ActionType"

const navigate = useNavigate();

export const createOrder = (reqData) => async (dispatch)=>{

    dispatch({type: CREATE_ORDER_REQUEST});

    try {
        const {data} = await api.post(`/api/orders/`,reqData.address);

        if(data.id){
            reqData.navigate({ search: `step-3&order_id=${data.id}`})
        }
        console.log("created order : " , data);
        dispatch(
           { type : CREATE_ORDER_SUCCESS , 
            payload : data,
           }
        );
    } catch (error) {
        console.log("catch error : " , error);
        dispatch({type : CREATE_ORDER_FAILURE,payload : error.message});
    };

}