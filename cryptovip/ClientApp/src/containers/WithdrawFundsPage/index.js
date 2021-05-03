import React from 'react';
import useForm from 'containers/WithdrawFundsPage/useForm';
import WithdrawFundsPage from 'layout/WithdrawFunds';


const WithdrawFunds = () =>{
    debugger;
    return (<WithdrawFundsPage form={useForm()} />)
};

export default WithdrawFunds;