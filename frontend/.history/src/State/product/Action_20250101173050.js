import { api } from "../../config/Api_config";
import {
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_FAILURE,
  FIND_PRODUCT_REQUEST,
  FIND_PRODUCT_SUCCESS,
} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {

  dispatch({ type: FIND_PRODUCT_REQUEST });

  const {
    color,
    size,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    sort,
    stock,
    pageNumber,
    pageSize,
  } = reqData;

  try {
     const { data } = await api.get(`/api/products?color=${color}&size=${size}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`);

    dispatch({ type: FIND_PRODUCT_SUCCESS, payload:data});
    console.log("Product data all is here", data);

  } catch (error) {
    dispatch({ type: FIND_PRODUCT_FAILURE, payload: error.message });
  }
};


export const findProductsById = (reqData) => async (dispatch) => {

  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });  
  const { productId } = reqData;

  try {
    const { data } = await api.get(`/api/products/id/${productId}`);

    console.log("product data by ID : ", data)
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};

