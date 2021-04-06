import React, { useEffect } from 'react';
import SignupPage from '../../layout/SignupPage';
import useForm from './useForm';

const SignupContainer = () => {
    useEffect(() => {

    }, []);

    return <SignupPage  form={useForm()}/>;
}

export default SignupContainer;