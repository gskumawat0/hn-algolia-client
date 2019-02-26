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
                    console.log(err);
                    dispatch(addError(err));
                    reject();
                });
        })
    };
}
