import React from 'react';
import AdminPage from 'layout/Admin';
import useForm from 'containers/AdminPage/useForm';


const AdminContainer = () =>{ 
    return (<AdminPage form={useForm()} />)
};

export default AdminContainer;