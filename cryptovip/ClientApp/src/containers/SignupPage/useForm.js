import { signup as signupAction } from 'context/actions/signup';
import { GlobalContext } from 'context/Provider';
import {useContext, useEffect, useState} from 'react';
import { useHistory } from 'react-router';

export default () =>{
    const [form, setForm] = useState({});
    const [fieldErrors, setFieldErrors] = useState({});
    const {authDispatch, 
        authState:{
            auth :{loading, error, signup}
        }
    } = useContext(GlobalContext);
    const history = useHistory();

    useEffect(()=>{
        if(error){
            setFieldErrors({fieldErrors, error})
        }
    },[error]);

    useEffect(()=>{
        if(signup){
            if (signup.success) {
                history.push("/login");
            }
            else {
                setFieldErrors({fieldErrors, err: signup.error});
            }
        }
    },[signup]);

    const onChange = (e, val) =>{
        setForm({...form, [e.currentTarget.id]: e.currentTarget.type == "checkbox" ? e.currentTarget.checked : e.currentTarget.value });
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        setFieldErrors({});
        if(validateForm()){
            signupAction(form)(authDispatch);   
        }        
    };

    const validateForm = () =>{
        if(form.password !== form.repassword){
            setFieldErrors({fieldErrors, err:'Pasword mismatch'})
            return false;
        }
        return true;
    }

    let formValid = !form.firstName?.length || 
    !form.lastName?.length || 
    !form.email?.length || 
    !form.password?.length ||
    !form.repassword?.length ||
    !form.terms;

   console.log('fielderror', fieldErrors);
    return {form, onChange, onSubmit, formValid, loading, fieldErrors, signup};
};