import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_ITEMS } from '../actionTypes';

export const loadItems = (items) => ({
    type: LOAD_ITEMS,
    items,
});

export const fetchItems = (query) => {
    let searchUrl = `${process.env.REACT_APP_HN_ALGOLIA_API}tags=story`
    if(query){
        searchUrl += `&query=${query}`
    }
    console.log(searchUrl);
    return dispatch => {
        return apiCall('get', searchUrl, null)
            .then((res) => {
                dispatch(loadItems(res.hits));
            })
            .catch((err) => {
                dispatch(addError(err.message));
            });
    };
};
