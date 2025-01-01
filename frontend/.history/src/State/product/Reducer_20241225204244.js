import { FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_REQUEST } from "./ActionType"


const initialState ={

    products :[],
    product : null,
    loading : false,
    error : null
}
const customerProductReducer = (state=initialState , action)=>{

    switch(action.type){

        case FIND_PRODUCT_REQUEST :
            case FIND_PRODUCT_BY_ID_REQUEST :
                return()
    }


}