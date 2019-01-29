import { combineReducers} from 'redux';

import userReducer from './currentUser';
import errorReducer from './errors';
import itemsReducer from './items'

const rootReducer = combineReducers({
    currentUser: userReducer,
    errors : errorReducer,
    items: itemsReducer
});

export default rootReducer;