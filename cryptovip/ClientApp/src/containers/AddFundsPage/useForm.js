import { addfunds } from "context/actions/addfunds";
import { GlobalContext } from "context/Provider";
import axiosInstance from "helpers/axiosInstance";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";


export default() =>{
    const {authDispatch, 
        authState:{
            auth :{loading, error, addfundsData}
        }
    } = useContext(GlobalContext)

    const [form, setForm] = useState({});
    const [isCopied, setIsCopied] = useState(false);
    const history = useHistory();

    const onClick = (e) =>{
        e.preventDefault();
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
            debugger;
            console.log(err);
        });
    },[]);   

    useEffect(() =>{
        debugger;
        if(addfundsData){
            setForm({...form, fundsData: addfundsData.value})
        }
    }, [addfundsData]);

    return {form, loading, error, isCopied, onChange, onClick, onCopyText};
};