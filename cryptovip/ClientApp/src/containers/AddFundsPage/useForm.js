import { addfunds } from "context/actions/addfunds";
import { GlobalContext } from "context/Provider";
import axiosInstance from "helpers/axiosInstance";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";


export default() =>{
    const {authDispatch, 
        authState:{
            auth :{loading, error, data}
        }
    } = useContext(GlobalContext)

    const [form, setForm] = useState({});

    const onSubmit = (e) =>{
        e.preventDefault();
        addfunds(form)(authDispatch);
    };

    const onChange = (e, val) =>{
        setForm({...form, [e.currentTarget.id]: e.currentTarget.value });
    };

    useEffect(() =>{
        debugger;
        axiosInstance()
        .get('/payment/paymentoptions')
        .then((res) =>{
            debugger;
            if(res.data.success){
                setForm({...form, Options: res.data.value});
            }
            else{
                console.log(res.data.error)
            }            
        })
        .catch((err) => {
            debugger;
            console.log(err);
        });
    },[]);

    useEffect(() =>{
        if (data) {
            
        }
    },[data]);

    return {form, loading, error, data, onChange, onSubmit};
};