import {GET_ITEMS, DELETE_ITEM, ADD_ITEM } from './types';


export const getItems = ()=>{
    return{
        type: GET_ITEMS
    }
}


export const deleteItems = (id)=>{
    return{
        type: DELETE_ITEM,
        payload: id
    }
}




export const itemAdd = (item) =>{
    return{
        type: ADD_ITEM,
        payload: item
    }
}


