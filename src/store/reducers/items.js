import {LOAD_ITEMS} from '../actionTypes';

const itemsReducer = (state=[], action) => {
  switch(action.type) {
    case LOAD_ITEMS:
      return [...action.messages];
    default:
      return state;
  }
};

export default itemsReducer;