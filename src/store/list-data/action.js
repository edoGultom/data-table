import axiosInstance from '../../utils/axios';
import {GET_DATA_SUCCESS, GET_DATA_FAIL } from "./const";

export function getData(page, limit, keyword, gender){
    return async (dispatch, getState) => {
      await axiosInstance.get(`/`,{
          params: {
              page:page,
              pageSize: limit,
              results: 50,
              keyword: keyword,
              gender: gender
          }
      })
        .then((response) => {
            dispatch({
                type   : GET_DATA_SUCCESS,
                payload: (response.status === 200) ? response.data.results : [],
                info_payload: (response.status === 200) ? response.data.info : {}
            });
        }).catch(function(error){
            dispatch({
                type   : GET_DATA_FAIL,
                payload: error.response && error.response.data.message 
                ? error.response.data.message
                : error.message
            });
        });
    }
}