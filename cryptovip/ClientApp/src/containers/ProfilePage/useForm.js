import { GlobalContext } from "context/Provider";
import axiosInstance from "helpers/axiosInstance";
import { useContext, useEffect, useState } from "react";
import { saveProfile } from "context/actions/saveProfile";

export default() =>{
    const {authDispatch, 
        authState:{
            auth :{loading, error, profile}
        }
    } = useContext(GlobalContext)

    const [form, setForm] = useState({});

    const onClick = (e) =>{
        e.preventDefault();
        saveProfile(form)(authDispatch);
    };

    const onChange = (e, val) =>{
        setForm({...form, [e.currentTarget.id]: e.currentTarget.value });
    };
    
    useEffect(() =>{   
        //if(!form)
        {
            axiosInstance()
                .get(`/userProfile?username=${JSON.parse(sessionStorage.user).userName}`)
                .then((res) =>{
                    if(res.data.success){
                        debugger;
                        setForm(res.data.value);
                        console.warn(res.data.value.dateOfBirth.split("T")[0])
                    }
                    else{
                        console.log(res.data.error)
                    }            
                })
                .catch((err) => {
                    console.log(err);
                });
        }            
    }, []);

    useEffect(() =>{       
        setForm(profile);
    }, [profile]);
       
    return {form, loading, error, onChange, onClick};
};