import React from 'react';
import ProfilePage from 'layout/ProfilePage';
import useForm from 'containers/ProfilePage/useForm';


const ProfileContainer = () =>{
    return (<ProfilePage form={useForm()}/>)
};

export default ProfileContainer;