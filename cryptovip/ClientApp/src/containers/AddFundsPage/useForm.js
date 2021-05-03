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

    const [form, setForm] = useState({accountNumber: JSON.parse(sessionStorage.user).vipAccountNumber});
    
    const [isCopied, setIsCopied] = useState(false);

    const onClick = (e) =>{
        e.preventDefault();
        debugger
        addfunds(form)(authDispatch);
    };

    const onChange = (e, val) =>{
        setForm({...form, [e.currentTarget.id]: e.currentTarget.value });
    };

    const onCopyText = ()=> {
        setIsCopied(true);
        setTimeout(() => {
        setIsCopied(false);
        }, 1000);
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
        if(addfundsData){
            setForm({...form, fundsData: addfundsData.value});            
        }
    }, [addfundsData]);

    const isValid = !!form.amount && !!form.currencyid;

    return {form, loading, error, isCopied, isValid, onChange, onClick, onCopyText};
};