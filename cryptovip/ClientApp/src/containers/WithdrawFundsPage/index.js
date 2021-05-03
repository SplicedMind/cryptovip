import React from 'react';
import useForm from 'containers/WithdrawFundsPage/useForm';
import WithdrawFundsPage from 'layout/WithdrawFunds';


const WithdrawFunds = () =>{
    return (<WithdrawFundsPage form={useForm()} />)
};

export default WithdrawFunds;