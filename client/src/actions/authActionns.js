import axios from 'axios'; 
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT_SUCCESS
} from './types';

import { returnErrors } from './errorAction';
// Check token and load user

export const loadUser = () => (dispatch, getState) => {
    // user loading
    dispatch({ type : USER_LOADING });
   
    axios.get('/api/auth/user',tokenConfig(getState))
    .then(res => dispatch({
        type: USER_LOADED,
        payload: res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status))
        dispatch({
            type: AUTH_ERROR,
            payload: err 
        })
    })
}

// set up config/headers and token

export const tokenConfig = getState =>{
     // get token localStorage
     const token = getState().auth.token;

     //Header
     const config = {
         headers: {
             "Content-type":"application/json"
         }
     }
 
     // if token then add to headers
     if(token){
         config.headers['x-auth-token'] = token;
     }

     return config;
}