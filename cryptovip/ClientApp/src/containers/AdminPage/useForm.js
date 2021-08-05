import { GlobalContext } from "context/Provider";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";


export default() =>{
    const {authDispatch, 
        authState:{
            auth :{loading, error}
        }
    } = useContext(GlobalContext)

    const [form, setForm] = useState({});
    const history = useHistory();

    const onSubmit = (e) =>{
        e.preventDefault();
    };

    const onClick = (e, val) =>{
        debugger
        setForm({...form, [e.currentTarget.id]: e.currentTarget.value });
    };

    useEffect(() =>{
        
    });

    useEffect(() =>{
           
    });

    return {form, loading, error,  onClick, onSubmit};
};