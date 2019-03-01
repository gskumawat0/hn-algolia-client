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
    debugger
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall('post', `https://hn-algolia-gskumawat.c9users.io:8080/api/auth/${type}`, userData)
                .then(({ token, ...user }) => {
                    // console.log(user)
                    // debugger
                    localStorage.setItem('jwtToken', token);
                    setAuthorizationToken({ token });
                    // debugger
                    dispatch(setCurrentUser(user));
                    debugger
                    dispatch(removeError());
                    resolve();
                })
                .catch((err) => {
                    debugger
                    if (err.response) {
                        console.log(1213, err.response.data);
                        dispatch(addError(err.response.data));
                    }
                    else if (err.request) {
                        console.log(err, 4555555);
                        dispatch(addError('an error occured while processing your request'));
                    }
                    else {
                        // Something happened in setting up the request that triggered an Error
                        console.log(err, err.message, 2222);
                        dispatch(addError(err.message));
                    }
                    // console.log(err);

                    reject();
                });
        })
    };
}
