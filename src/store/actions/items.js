import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_ITEMS } from '../actionTypes';

export const loadItems = (items) => ({
    type: LOAD_ITEMS,
    items,
});

export const fetchItems = (query) => {
    let baseUrl = `http://hn.algolia.com/api/v1/search`
    let searchUrl = `${baseUrl}?query=${query||''}&tags=story`;
    return dispatch => {
        return apiCall('get', searchUrl, null)
            .then((res) => {
                dispatch(loadItems(res.hits));
            })
            .catch((err) => {
                debugger
                dispatch(addError(err.message));
            });
    };
};
