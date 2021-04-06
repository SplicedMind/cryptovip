import {LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS} from '../../constants/actionTypes/index';

const auth = (state, {payload, type}) => {
    switch(type){
        case SIGNUP_LOADING:
        case LOGIN_LOADING:
            return {
                ...state,
                 auth:{
                     ...state.auth,
                     error:false,
                     loading:true
                },
            };
        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                 auth:{
                     ...state.auth,
                     loading:false,
                     data: payload
                },
            };
        case SIGNUP_ERROR:
        case LOGIN_ERROR:
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