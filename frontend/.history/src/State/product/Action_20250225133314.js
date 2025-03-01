import { api } from "../../config/Api_config";
import { API_BASE_URL } from './../../config/Api_config';

import {
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_FAILURE,
  FIND_PRODUCT_REQUEST,
  FIND_PRODUCT_SUCCESS,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
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

  console.log("product is :", productId)

  try {
    const { data } = await api.get(`/api/products/id/${productId}`);

    console.log("product data by ID : ", data)
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};

export const createProduct = (product) => async (dispatch) => {

  try {
    dispatch({type: CREATE_PRODUCT_REQUEST});
    const { data } = await api.post(`${API_BASE_URL}/api/admin/products/`, product);

    console.log("Product created is ", data)
    
    dispatch({type: CREATE_PRODUCT_SUCCESS, payload: data});
   
  } catch (error) {
    dispatch({type: CREATE_PRODUCT_FAILURE, payload: error.message});
  }
}

// export const updateProduct = (product) => async (dispatch) => {

//   try {
//     dispatch({type: UPDATE_PRODUCT_REQUEST});
//     const { data } = await api.put(`${API_BASE_URL}/api/admin/products/${product.id}`, product.data);
//     dispatch({type: UPDATE_PRODUCT_SUCCESS, payload: data});
   
//   } catch (error) {
//     dispatch({type: UPDATE_PRODUCT_FAILURE, payload: error.message});
//   }
// }

export const deleteProduct = (productId) => async (dispatch) => {


  try {
    dispatch({type: DELETE_PRODUCT_REQUEST});
    const { data } = await api.delete(`${API_BASE_URL}/api/admin/products/${productId}/delete`);
   console.log("deleted product id is :::::: " ,data)
    dispatch({type: DELETE_PRODUCT_SUCCESS, payload: productId});
   
  } catch (error) {
    dispatch({type: DELETE_PRODUCT_FAILURE, payload: error.message});
  }
} 
