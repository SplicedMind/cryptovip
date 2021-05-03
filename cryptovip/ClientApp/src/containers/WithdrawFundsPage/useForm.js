import { GlobalContext } from "context/Provider";
import axiosInstance from "helpers/axiosInstance";
import { useContext, useEffect, useState } from "react";
import { withdrawFunds } from "context/actions/withdrawfunds";

export default() =>{
    const {authDispatch, 
        authState:{
            auth :{loading, error, withdraw}
        }
    } = useContext(GlobalContext)

    const [form, setForm] = useState({accountnumber: JSON.parse(sessionStorage.user).vipAccountNumber});
    const [address, setAddress] = useState({});

    const onClick = (e) =>{
        e.preventDefault();
        withdrawFunds(form)(authDispatch);
    };

    const onChange = (e, val) =>{
        debugger;
        setForm({...form, [e.currentTarget.id]: e.currentTarget.value });

        if(e.currentTarget.id === "currencyid"){
            axiosInstance()
                .get(`/payment/address?currencyid=${e.currentTarget.value}&accountnumber=${form.accountnumber}`)
                .then((res) =>{
                    if(res.data.success){
                        debugger;
                        setAddress(res.data.value[0])
                        //setForm({...form, address: res.data.value[0].address, network: res.data.value[0].network});
                    }
                    else{
                        console.log(res.data.error)
                    }            
                })
                .catch((err) => {
                    console.log(err);
                });
        }
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
        if(withdraw){
            setForm({...form, withdrawInfo: withdraw.value});            
        }
    }, [withdraw]);

    useEffect(() =>{
        if(address){
            setForm({...form, address: address.address, network: address.network});            
        }
    }, [address]);

    const isValid = !!form.amount && !!form.currencyid && !!form.address && !!form.network;

    return {form, loading, error, isValid, onChange, onClick};
};