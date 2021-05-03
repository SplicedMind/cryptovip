import { addfunds } from "context/actions/addfunds";
import { GlobalContext } from "context/Provider";
import axiosInstance from "helpers/axiosInstance";
import { useContext, useEffect, useState } from "react";

export default() =>{
    const {authDispatch, 
        authState:{
            auth :{loading, error, withdraw}
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
    },[]);   

    useEffect(() =>{
        if(withdraw){
            setForm({...form, fundsData: withdraw.value});            
        }
    }, [withdraw]);
   
    debugger
    const isValid = !!form.amount && !!form.currencyid && !!form.address && !!form.network;

    return {form, loading, error, isValid, onChange, onClick};
};