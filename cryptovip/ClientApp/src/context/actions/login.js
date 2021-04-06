import axiosInstance from '../../helpers/axiosInstance';
import {LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS} from '../../constants/actionTypes/index';



export const login = ({email, password})=>(dispatch)=>{
    dispatch({
        type:LOGIN_LOADING,
    });
    axiosInstance()
        .post('/user/login',{email, password})
        .then((res) => {
            console.log('res', res);            
            if (res.data.success) {                
                dispatch({
                    type:LOGIN_SUCCESS,
                    payload:res.data
                });
            }
            else 
            {
                dispatch({
                    type:LOGIN_ERROR,
                    payload: res.data.error
                });
            }            
        })
        .catch((err) => {
            console.log('err',err)
            dispatch({
                type:LOGIN_ERROR,
                payload: err
            });
        });
}