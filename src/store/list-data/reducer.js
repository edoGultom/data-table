import {GET_DATA_SUCCESS, GET_DATA_FAIL } from "./const"

const initialValue = {
    data: [],
    info: {},
    loading: false
}
export default function Reducer(state = initialValue, action){
    switch (action.type) {

        case GET_DATA_SUCCESS:
        // console.log(JSON.stringify(action.payload))
            return{
                ...state,
                data: action.payload,
                info: action.info_payload
            }
        default:
            return state;
    }
}