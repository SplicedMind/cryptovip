import axiosInstance from '../../helpers/axiosInstance';
import {FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD_LOADING, FORGOT_PASSWORD_SUCCESS} from '../../constants/actionTypes/index';



export const login = ({email})=>(dispatch)=>{
    dispatch({
        type:FORGOT_PASSWORD_LOADING,
    });
    axiosInstance()
        .post('/user/forgotpassword', {email})
        .then((res) => {
            console.log('res', res);            
            if (res.data.success) {                
                dispatch({
                    type:FORGOT_PASSWORD_SUCCESS,
                    payload:res.data
                });
            }
            else 
            {
                dispatch({
                    type:FORGOT_PASSWORD_ERROR,
                    payload: res.data.error
                });
            }            
        })
        .catch((err) => {
            console.log('err',err)
            dispatch({
                type:FORGOT_PASSWORD_ERROR,
                payload: err
            });
        });
}