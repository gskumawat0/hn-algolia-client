import {apiCall} from '../../services/api';
import {addError} from './errors';
import {LOAD_ITEMS} from '../actionTypes';

export const  loadItems = (items) =>({
    type: LOAD_ITEMS,
    items,
});

export const fetchItems = () =>{
    debugger
    return dispatch => {
        return apiCall('get','http://hn.algolia.com/api/v1/search?tags=front_page')
            .then(res =>{
                // console.log(res.hits);
                dispatch(loadItems(res.hits));
            })
            .catch(err =>{
                dispatch(addError(err.message));
            });
    };
};