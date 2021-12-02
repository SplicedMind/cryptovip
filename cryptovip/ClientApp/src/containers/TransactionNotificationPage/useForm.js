import axiosInstance from "helpers/axiosInstance";
import { GlobalContext } from 'context/Provider';
import {useContext, useEffect, useState} from 'react';
import ts from "typescript";

export default() =>{
   
    const [form, setForm] = useState({accountnumber: JSON.parse(sessionStorage.user).vipAccountNumber});
    const [tState, setTState] = useState({success: null, message: ""});

    const onClick = (e) =>{
        e.preventDefault();
        axiosInstance()
        .post('payment/paymentnotification', form)
        .then((res) => {
            if (res.data.success) {    
                setTState({success: true, message:"Your Trsanction Notification Has Been Submitted Successfully"});
            }
            else 
            {
                setTState({success: false, message:"Your Trsanction Notification Could Not Be Submitted. Please Try Again Later."});
            }            
        })
        .catch((err) => {
            setTState({success: false, message: err});            
        });
    };

    const onChange = (e, val) =>{        
        setForm({...form, [e.currentTarget.id]: e.currentTarget.value });        
    };

    useEffect(() =>{
        axiosInstance()
        .get('/payment/paymentoptions')
        .then((res) =>{
            if(res.data.success){
                setForm({...form, Options: res.data.value});
            }
            else{
                console.log(res.data.error)
            }            
        })
        .catch((err) => {
            console.log(err);
        });
        setForm({...form, Profile: sessionStorage.user });
    },[]); 
    
    useEffect(() =>{
        if(tState.success){
            setForm({...form, amount: ""});       
            setForm({...form, address: ""});
            setForm({...form, currencyid: ""});
        }
    }, [tState]);
    
    let isValid = !!form.amount && !!form.currencyid && !!form.address && !!form.date;  

    return {form, tState, isValid, onChange, onClick};
};