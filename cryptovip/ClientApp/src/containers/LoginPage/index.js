import React from 'react';
import LoginPage from 'layout/LoginPage';
import useForm from 'containers/LoginPage/useForm';


const LoginContainer = () =>{

    return (<LoginPage form={useForm()}/>)
};

export default LoginContainer;