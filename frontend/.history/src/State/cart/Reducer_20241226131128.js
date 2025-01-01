import { ADD_ITEM_TO_CART_REQUEST, ADD_ITEM_TO_CART_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCT_FAILURE, FIND_PRODUCT_REQUEST, FIND_PRODUCT_SUCCESS } from "./ActionType"


const initialState ={

    cartItems :[],
    cart : null,
    loading : false,
    error : null
}
export const cartReducer = (state=initialState , action)=>{

    switch(action.type){

        case ADD_ITEM_TO_CART_REQUEST :
        case GET_CART_REQUEST :
        case REMOVE_CART_ITEM_REQUEST:
                return{...state, loading:true,error:null};
                
         case ADD_ITEM_TO_CART_SUCCESS :            
                return{...state, loading:false,error:null,cartItems:[...state,action.payload.cartItems]};
                
         case FIND_PRODUCT_BY_ID_SUCCESS :            
                return{...state, loading:false,error:null,product:action.payload};
              
         case FIND_PRODUCT_FAILURE :
            case FIND_PRODUCT_BY_ID_FAILURE:
            return{...state ,loading:false, error:action.payload}

        default :
        return state;
    }


}