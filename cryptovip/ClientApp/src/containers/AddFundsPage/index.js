import React from 'react';
import AddFundsPage from 'layout/AddFunds';
import useForm from 'containers/AddFundsPage/useForm';


const AddFundsContainer = () =>{

    return (<AddFundsPage form={useForm()}/>)
};

export default AddFundsContainer;