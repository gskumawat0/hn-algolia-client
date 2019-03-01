import axios from 'axios';
// import { addError } from '../store/actions/errors';
export function setTokenHeader(token) {
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    else {
        delete axios.defaults.headers.common['Authorization'];
    }
}


export function apiCall(method, path, data) {
    return new Promise((resolve, reject) => {
        return axios[method](path, data)
            .then(res => {
                return resolve(res.data);
            })
            .catch((err) => {
                if (err.response) {
                    return reject(err.response.data);
                }
                else if (err.request) {
                    return reject({ message: "an error occured while processing your request. please check your network connection" });
                }
                else {
                    debugger
                    console.log('Error', err, err.message, 777);
                    return reject(err.message);
                }
            });
    });
}
