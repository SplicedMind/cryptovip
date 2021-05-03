import { addfunds } from "context/actions/addfunds";
import { GlobalContext } from "context/Provider";
import axiosInstance from "helpers/axiosInstance";
import { useContext, useEffect, useState } from "react";

export default() =>{
    const {authDispatch, 
        authState:{
            auth :{loading, error, transactions}
        }
    } = useContext(GlobalContext)

    const [form, setForm] = useState({});

    const onClick = (e) =>{
        e.preventDefault();
        addfunds(form)(authDispatch);
    };

    const onChange = (e, val) =>{
        setForm({...form, [e.currentTarget.id]: e.currentTarget.value });
    };

    useEffect(() =>{
        axiosInstance()
        .get(`/payment/transactions?accountnumber=${JSON.parse(sessionStorage.user).vipAccountNumber}`)
        .then((res) =>{
            if(res.data.success){
                debugger;
                setForm({...form, Transaction: res.data.value});
            }
            else{
                console.log(res.data.error)
            }            
        })
        .catch((err) => {
            console.log(err);
        });
    },[]);   

    const isValid = !!form.amount && !!form.currency;

    return {form, loading, error, isValid, onChange, onClick};
};