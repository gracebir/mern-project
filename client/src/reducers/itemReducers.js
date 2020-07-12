import uuid from 'react-uuid';
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types';
const initialState ={
    item: {},
    items: [
        { id: uuid(), name: "Eggs"},
        { id: uuid(), name: "Milk"},
        { id: uuid(), name: "Steak"},
        { id: uuid(), name: "Water"},
        { id: uuid(), name: "Jus"}
    ]
}


export default function(state=initialState, action){
    switch(action.type){
        default:
            return state;
    }
}