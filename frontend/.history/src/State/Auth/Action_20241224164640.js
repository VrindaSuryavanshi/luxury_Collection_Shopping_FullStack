import axios from "axios"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";

const token = localStorage.getItem("jwt");
const registerRequest = ()=>({ type:REGISTER_REQUEST});
const registerSuccess = ()=>({ type:REGISTER_SUCCESS,payload:user});
const registerFailure = ()=>({ type: REGISTER_FAILURE,payload:error});

export const register = (userData)=> async(dispatch) =>{

    dispatch(registerRequest());
    try{
        const response = await axios.post(`${API_BASE_URL}/auth/signin` , userData);
        const user =response.data;
        console.log("userdata " ,user);
        if(user.jwt){
            localStorage.setItem("jwt" , user.jwt);

            dispatch(registerSuccess(user.jwt));
        }
    }catch(error){
        dispatch(registerFailure(error.message));
    }
}
const loginRequest = ()=>({ type: LOGIN_REQUEST});
const loginSuccess = ()=>({ type:  LOGIN_SUCCESS,payload:user});
const loginFailure = ()=>({ type: LOGIN_FAILURE,payload:error});

export const login = (userData)=> async(dispatch) =>{

    dispatch(loginRequest());
    try{
        const response = await axios.post(`${API_BASE_URL}/auth/signup` , userData);
        const user =response.data;
        console.log("user " ,user);
        if(user.jwt){
            localStorage.setItem("jwt" , user.jwt);

            dispatch(loginSuccess(user.jwt));
        }
    }catch(error){
        dispatch(loginFailure(error.message));
    }
}

const getUserRequest = ()=>({ type: GET_USER_REQUEST});
const getUserSuccess = ()=>({ type:  GET_USER_SUCCESS,payload:user});
const getUserFailure = ()=>({ type: GET_USER_FAILURE,payload:error});

export const getUser = (jwt)=> async(dispatch) =>{

    dispatch(getUserRequest());
    try{
        const response = await axios.get(`${API_BASE_URL}/api/user/profile` ,{
            headers :{
                "Authorization" : `Bearer ${jwt}`
            }
        });
        const user =response.data;
        console.log("get user " ,user);
            dispatch(getUserSuccess(user));
       
    }catch(error){
        dispatch(getUserFailure(error.message));
    }
}

export const logout = ()=>(dispatch) =>{

    dispatch({type : LOGOUT ,payload:null});
}