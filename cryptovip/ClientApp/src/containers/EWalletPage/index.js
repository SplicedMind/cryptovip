import React from 'react';
import useForm from 'containers/EWalletPage/useForm';
import EWallet from 'layout/EWalletPage';


const AddFundsContainer = () =>{
 
    return (<EWallet form={useForm()} />)
};

export default AddFundsContainer;