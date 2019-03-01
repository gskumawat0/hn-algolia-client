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
    let authUrl = `http://hn-algolia-server.herokuapp.com/api/auth`
    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall('post', `${authUrl}/${type}`, userData)
                .then(({ token, ...user }) => {
                    localStorage.setItem('jwtToken', token);
                    setAuthorizationToken({ token });
                    // debugger
                    dispatch(setCurrentUser(user));
                    dispatch(removeError());
                    resolve();
                })
                .catch((err) => {
                    dispatch(addError(err.message));
                    reject(err);
                });
        })
    };
}
