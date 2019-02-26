import { SET_CURRENT_USER } from '../actionTypes'

const DEFAULT_STATE = {
    isAuthenticated: false,
    user: {} //all info about user when user logged in

};

const userReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            debugger
            return { isAuthenticated: !!Object.keys(action.user).length, user: action.user }
        default:
            return state;
    }
};

export default userReducer;
