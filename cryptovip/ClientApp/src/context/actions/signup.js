import axiosInstance from '../../helpers/axiosInstance';
import {SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS} from '../../constants/actionTypes/index';

export const signup = (form) => (dispatch) => {
    
    dispatch({
        type:SIGNUP_LOADING,
    });
    axiosInstance()
        .post('/user/signup',form)
        .then((res) => {
            console.log('res', res);
            dispatch({
                type:SIGNUP_SUCCESS,
                payload:res.data
            });
        })
        .catch((err) => {
            
            console.log('err',err)
            dispatch({
                type:SIGNUP_ERROR,
                payload: err
            });
        });
};