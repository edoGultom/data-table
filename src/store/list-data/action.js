import axiosInstance from '../../utils/axios';
import {GET_DATA_SUCCESS, GET_DATA_FAIL } from "./const";

export function getData(page, rowsPerPage, keyword, gender){
    return async (dispatch, getState) => {
      await axiosInstance.get(`/`,{
          params: {
              page:page+1,
              pageSize: rowsPerPage,
              results: 10,
              keyword: keyword,
              gender: gender
          }
      })
        .then((response) => {
            // console.log(response.data.info.page+ ' page')
            dispatch({
                type   : GET_DATA_SUCCESS,
                payload: (response.status === 200) ? response.data.results : [],
                info_payload: (response.status === 200) ? response.data.info.page : {}
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