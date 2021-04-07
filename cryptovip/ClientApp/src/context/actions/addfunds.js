import axiosInstance from '../../helpers/axiosInstance';
import {ADDFUNDS_ERROR, ADDFUNDS_LOADING, ADDFUNDS_SUCCESS} from '../../constants/actionTypes/index';

export const addfunds = ({amount, currency}) => (dispatch) =>{
    dispatch({
        type:ADDFUNDS_LOADING
    });

    axiosInstance()
        .post('payment/makepayment',{amount, currency})
        .then((res) => {
            console.log('res', res);            
            if (res.data.success) {                
                dispatch({
                    type:ADDFUNDS_SUCCESS,
                    payload:res.data
                });
            }
            else 
            {
                dispatch({
                    type:ADDFUNDS_ERROR,
                    payload: res.data.error
                });
            }            
        })
        .catch((err) => {
            console.log('err',err)
            dispatch({
                type:ADDFUNDS_ERROR,
                payload: err
            });
        });
}