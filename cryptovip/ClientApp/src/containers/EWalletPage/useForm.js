import { addfunds } from "context/actions/addfunds";
import { GlobalContext } from "context/Provider";
import axiosInstance from "helpers/axiosInstance";
import { useContext, useEffect, useState } from "react";

export default() =>{
    const {authDispatch, 
        authState:{
            auth :{loading, error, addfundsData}
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
        .get(`/userprofile/ewallets?accountnumber=${JSON.parse(sessionStorage.user).vipAccountNumber}`)
        .then((res) =>{
            if(res.data.success){
                setForm({...form, Wallets: res.data.value});
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