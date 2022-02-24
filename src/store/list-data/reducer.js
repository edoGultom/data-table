import {GET_DATA } from "./const"

const initialValue = {
    data: [],
    loading: false
}
export default function Reducer(state = initialValue, action){
    switch (action.type) {
        case GET_DATA:
            return{
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}