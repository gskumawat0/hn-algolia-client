import axios from "axios";
const { REACT_APP_HN_ALGOLIA_API: algoliaApi } = process.env;

// import { addError } from '../store/actions/errors';
export function setTokenHeader(token) {
	if (token) {
		// axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
	} else {
		delete axios.defaults.headers.common["Authorization"];
	}
}

export function apiCall(method, path, data) {
	return new Promise((resolve, reject) => {
		return axios[method](path, data)
			.then((res) => {
				return resolve(res.data);
			})
			.catch((err) => {
				if (err.response) {
					return reject(err.response.data);
				} else if (err.message) {
					return reject({ message: err.message });
				} else {
					return reject(err.message);
				}
			});
	});
}

export function api() {
	return axios.create({
		baseURL: algoliaApi,
		headers: {},
	});
}
