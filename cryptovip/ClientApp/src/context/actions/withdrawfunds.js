import axiosInstance from '../../helpers/axiosInstance';
import {WITHDRAWAL_ERROR, WITHDRAWAL_LOADING, WITHDRAWAL_SUCCESS} from '../../constants/actionTypes/index';

export const withdrawFunds = ({currencyid, amount, accountnumber, network, address}) => (dispatch) =>{
    dispatch({
        type: WITHDRAWAL_LOADING
    });

    axiosInstance()
        .post('payment/withdrawfunds', {currencyid, amount, accountnumber, network, address})
        .then((res) => {
            console.log('res', res);    
                   
            if (res.data.success) {    
                dispatch({
                    type:WITHDRAWAL_SUCCESS,
                    payload:res.data
                });
            }
            else 
            {
                dispatch({
                    type:WITHDRAWAL_ERROR,
                    payload: res.data.error
                });
            }            
        })
        .catch((err) => {
            console.log('err',err)
            dispatch({
                type:WITHDRAWAL_ERROR,
                payload: err
            });
        });
}