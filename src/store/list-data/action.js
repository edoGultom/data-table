import { requestGetAxios } from '../../utils/service';
import {GET_DATA } from "./const";

export function getData(halaman, limit){
    return async (dispatch, getState) => {
        await requestGetAxios.get(`${process.env.REACT_APP_REST_API}/?results=10`
        // , { 
        //     params: {
        //         limit: limit,
        //         halaman: halaman,
        //         tahun: tahun
        //     }
        // }
        ).then((response) => {
            console.log(JSON.stringify(response))
            dispatch({
                type   : GET_DATA,
                payload: response.data,
                // info_payload: (response.data.success) ? response.data.paging : {
                //     jumlah_data: 0,
                //     jumlah_halaman: 1,
                //     halaman: 0
                // }
            });
        }).catch(function(error){
        });
    }
}