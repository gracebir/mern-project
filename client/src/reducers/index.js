import { combineReducers } from 'redux';
import itemReducers from './itemReducers';
import errorReducer from './errorReducer';
import authReducer from './authReducer';


export default combineReducers({
    items: itemReducers,
    auth: authReducer,
    error: errorReducer
})