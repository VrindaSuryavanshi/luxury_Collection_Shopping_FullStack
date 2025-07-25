import {
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_FAILURE,
  FIND_PRODUCT_REQUEST,
  FIND_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  CREATE_PRODUCT_FAILURE,
  CREATE_PRODUCT_REQUEST,
} from "./ActionType";

const initialState = {
  products: [],
  product: null,
  loading: false,
  error: null,
  deletedProduct: [],
};
export const customerProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FIND_PRODUCT_REQUEST:
    case FIND_PRODUCT_BY_ID_REQUEST:
    case DELETE_PRODUCT_REQUEST:
    case CREATE_PRODUCT_REQUEST:
      return { ...state, loading: true, error: null };

    case DELETE_PRODUCT_SUCCESS:
      return { ...state, loading: false, error: null ,
        deletedProduct: Array.isArray(state.products) 
        ? state.products.filter((product) => product.id !== action.payload)
        : [] 
      };

    case FIND_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        products:  action.payload,
      };

    case FIND_PRODUCT_BY_ID_SUCCESS:
      return { ...state, loading: false, error: null, product: action.payload };

    case FIND_PRODUCT_FAILURE:
    case FIND_PRODUCT_BY_ID_FAILURE:
    case DELETE_PRODUCT_FAILURE:
    case CREATE_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
