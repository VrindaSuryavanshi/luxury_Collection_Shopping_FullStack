import {
  GET_ORDER_FAILURE,
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  CONFIRMED_ORDER_FAILURE,
  CONFIRMED_ORDER_REQUEST,
  CONFIRMED_ORDER_SUCCESS,
  PLACED_ORDER_FAILURE,
  PLACED_ORDER_REQUEST,
  PLACED_ORDER_SUCCESS,
  SHIPPED_ORDER_FAILURE,
  SHIPPED_ORDER_REQUEST,
  SHIPPED_ORDER_SUCCESS,
  DELIVERED_ORDER_FAILURE,
  DELIVERED_ORDER_REQUEST,
  DELIVERED_ORDER_SUCCESS,
  CANCEL_ORDER_FAILURE,
  CANCEL_ORDER_REQUEST,
  CANCEL_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
} from "./ActionType";

const initialState = {   
  orders: [],
  order: null,
  loading: false,
  error: null,
};

export const adminOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
        return { ...state, loading: true };
    case CONFIRMED_ORDER_REQUEST:
    case PLACED_ORDER_REQUEST:
    case SHIPPED_ORDER_REQUEST:
    case DELIVERED_ORDER_REQUEST:
    case CANCEL_ORDER_REQUEST:
    case DELETE_ORDER_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        orders: action.payload,
        o:console.log("orders in reducer " , orders);
      };
      case DELIVERED_ORDER_SUCCESS:
            return { ...state, loading: false, error: null, delivered: action.payload };
    case CONFIRMED_ORDER_SUCCESS:
        return { ...state, loading: false, error: null, confirmed: action.payload };
    case PLACED_ORDER_SUCCESS:
        return { ...state, loading: false, error: null, placed: action.payload };
    case SHIPPED_ORDER_SUCCESS:
       return { ...state, loading: false, error: null, shipped: action.payload };
    case CANCEL_ORDER_SUCCESS:
        return { ...state, loading: false, error: null, cancelled: action.payload };
    case DELETE_ORDER_SUCCESS:
      return { ...state, loading: false, error: null, order: state.orders.filter((order) => order.id !== action.payload.id) };
    case GET_ORDER_FAILURE:
    case CONFIRMED_ORDER_FAILURE:
    case PLACED_ORDER_FAILURE:
    case SHIPPED_ORDER_FAILURE:
    case DELIVERED_ORDER_FAILURE:
    case CANCEL_ORDER_FAILURE:
    case DELETE_ORDER_FAILURE:   
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};


