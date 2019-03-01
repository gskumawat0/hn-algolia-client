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
                // console.log(res)
                return resolve(res.data);
            })
            .catch((err) => {
                // console.log(err);
                if (err.response) {
                    console.log(1213, err.response.data)
                }
                else if (err.request) {
                    console.log(err.request, 4555555);
                }
                else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', err.message, 2222);
                }
                return reject(err);
            });
    });
}
