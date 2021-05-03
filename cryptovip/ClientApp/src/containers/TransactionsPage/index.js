import React from 'react';
import useForm from 'containers/TransactionsPage/useForm';
import TransactionsPage from 'layout/TransactionsPage';


const Transactions = () =>{

    return (<TransactionsPage form={useForm()} />)
};

export default Transactions;