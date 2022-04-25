import constants from './constants';

const INITIAL_STATE = {
  currentUser: {},
  invalidUserEntry: '',
};

const userReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case constants.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case constants.USER_LOGIN_ERROR:
      return {
        ...state,
        invalidUserEntry: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
