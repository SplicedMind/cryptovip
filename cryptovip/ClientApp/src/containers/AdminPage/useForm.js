import { login as loginAction } from "context/actions/login";
import { GlobalContext } from "context/Provider";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";


export default() =>{
    const {authDispatch, 
        authState:{
            auth :{loading, error, signup, login}
        }
    } = useContext(GlobalContext)

    const [form, setForm] = useState({});
    const history = useHistory();

    const onSubmit = (e) =>{
        e.preventDefault();
        loginAction(form)(authDispatch);
    };

    const onChange = (e, val) =>{
        setForm({...form, [e.currentTarget.id]: e.currentTarget.value });
    };

    useEffect(() =>{
        if (login) {
            debugger;
            sessionStorage.setItem("user", JSON.stringify(login.value));
            sessionStorage.setItem("token", login.value.token);
            history.push("/dashboard");
        }
    },[login]);

    useEffect(() =>{
        debugger
        let url = window.location.href.split("?");
        if(url.length == 3){
            form.V = true;
            form.Verified = url[1] === 'verified' ;
            form.Verification = `${url[2]} ${form.Verified ? "verified successfully!" : "verification failed!"}`;
        }
        else{
            form.V = false;
        }      
    },[]);

    const formValid = !form.email?.length || !form.password?.length;
    return {form, loading, error, signup, formValid, onChange, onSubmit};
};