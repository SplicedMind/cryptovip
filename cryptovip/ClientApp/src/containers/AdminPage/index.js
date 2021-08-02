import React from 'react';
import useForm from 'containers/EWalletPage/useForm';
import AdminPage from 'layout/Admin';


const AdminContainer = () =>{
 
    return (<AdminPage form={useForm()} />)
};

export default AdminContainer;