import {LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, ADDFUNDS_ERROR, ADDFUNDS_LOADING, ADDFUNDS_SUCCESS,
    SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS} from '../../constants/actionTypes/index';

const auth = (state, {payload, type}) => {
    switch(type){
        case SIGNUP_LOADING:
        case LOGIN_LOADING:    
        case ADDFUNDS_LOADING:    
            return {
                ...state,
                 auth:{
                     ...state.auth,
                     error:false,
                     loading:true
                },
            };
        case SIGNUP_SUCCESS:
            return {
                ...state,
                 auth:{
                     ...state.auth,
                     loading:false,
                     signup: payload
                },
            };            
        case LOGIN_SUCCESS:
            return {
                ...state,
                 auth:{
                     ...state.auth,
                     loading:false,
                     login: payload
                },
            };    
        case ADDFUNDS_SUCCESS:  
            return {
                ...state,
                auth:{
                    ...state.auth,
                    loading:false,
                    addfundsData: payload
                },
            };
        case SIGNUP_ERROR:
        case LOGIN_ERROR:
        case ADDFUNDS_ERROR:
            return {
                ...state,
                 auth:{
                     ...state.auth,
                     error: payload,
                     loading:false
                },
            };
        default:
            return state;
    }
}

export default auth;