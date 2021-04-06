import { login } from "context/actions/login";
import { GlobalContext } from "context/Provider";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";


export default() =>{
    const {authDispatch, 
        authState:{
            auth :{loading, error, data}
        }
    } = useContext(GlobalContext)

    const [form, setForm] = useState({});
    const history = useHistory();

    const onSubmit = (e) =>{
        e.preventDefault();
        login(form)(authDispatch);
    };

    const onChange = (e, val) =>{
        setForm({...form, [e.currentTarget.id]: e.currentTarget.value });
    };

    useEffect(() =>{
        if (data) {
            debugger;
            sessionStorage.setItem("user", JSON.stringify(data.value));
            sessionStorage.setItem("token", data.value.token);
            history.push("/profile/dashboard");
        }
    },[data]);

    const formValid = !form.email?.length || !form.password?.length;
    return {form, loading, error, data, formValid, onChange, onSubmit};
};