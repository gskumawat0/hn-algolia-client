import { apiCall, setTokenHeader } from '../../services/api';
import { SET_CURRENT_USER } from '../actionTypes';
import { addError, removeError } from './errors';




export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user,
    }
}

export function setAuthorizationToken(token) {
    setTokenHeader(token);
}

export function logout() {
    return dispatch => {
        localStorage.clear();
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    };
}

export function authUser(type, userData) {
    let authUrl =  process.env.REACT_APP_API_URL
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall('post', `${authUrl}/api/auth/${type}`, userData)
                .then(({ success, ...data}) => {
                    if(success){
                        localStorage.setItem('jwtToken', data.token);
                        setAuthorizationToken(data.token);
                        dispatch(setCurrentUser(data.user));
                        dispatch(removeError());
                        resolve();
                    }
                    else throw new Error(data.message)
                    
                })
                .catch((err) => {
                    dispatch(addError(err.message || err.errmsg ||'something went wrong'));
                    reject();
                });
        })
    };
}
