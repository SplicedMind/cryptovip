import axiosInstance from '../../helpers/axiosInstance';
import {PROFILE_ERROR, PROFILE_LOADING, PROFILE_SUCCESS} from '../../constants/actionTypes/index';

export const saveProfile = (form) => (dispatch) =>{
    dispatch({
        type:PROFILE_LOADING
    });
debugger
    axiosInstance()
        .post('userProfile', form)
        .then((res) => {
            console.log('res', res);    
                   
            if (res.data.success) {    
                dispatch({
                    type:PROFILE_SUCCESS,
                    payload:res.data
                });
            }
            else 
            {
                dispatch({
                    type:PROFILE_ERROR,
                    payload: res.data.error
                });
            }            
        })
        .catch((err) => {
            console.log('err',err)
            dispatch({
                type:PROFILE_ERROR,
                payload: err
            });
        });
}