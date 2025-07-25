import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./product/Reducer";
import { cartReducer } from "./cart/Reducer";
import { orderReducer } from "./order/Reducer";
import { adminOrderReducer } from './admin/order/Reducer';

const rootReducers = combineReducers({

    auth : authReducer,
    products : customerProductReducer,
    cart : cartReducer,
    order : orderReducer ,
    adminOrder : adminOrderReducer,   

})
export const store = legacy_createStore(rootReducers ,applyMiddleware(thunk))