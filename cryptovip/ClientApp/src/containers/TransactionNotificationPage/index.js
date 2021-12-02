import React from 'react';
import TransactionsNotification from 'layout/TransactionNotification';
import useForm from 'containers/TransactionNotificationPage/useForm';


const TransactionsNotificationContainer = () =>{

    return (<TransactionsNotification form={useForm()}/>)
};

export default TransactionsNotificationContainer;