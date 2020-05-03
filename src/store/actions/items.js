import { addError } from "./errors";
import { LOAD_ITEMS } from "../actionTypes";
import { api } from "../../services/api";

export const loadItems = (items) => ({
	type: LOAD_ITEMS,
	items,
});

export const fetchItems = (query) => {
	let searchUrl = `?tags=story`;
	if (query) {
		searchUrl += `&query=${query}`;
	}
	return (dispatch) => {
		return api()
			.get(searchUrl)
			.then(({ data }) => {
				dispatch(loadItems(data.hits));
			})
			.catch((err) => {
				dispatch(addError(err.message));
			});
	};
};
