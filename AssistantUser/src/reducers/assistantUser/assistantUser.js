import * as actiontypes from '../../constants/actionTypes';

const assistantUserReducer = (state = { assistantUsers: [] }, action) => {
  switch (action.type) {
    case actiontypes.ADD_NEW_ASSISTANT_USER:
      return {
        ...state,
        assistantUsers: action.payload,
      };
    case actiontypes.GET_ALL_ASSISTANT_USERS:
      return {
        ...state,
        assistantUsers: action.payload,
      };
    default:
      return state;
  }
};

export default assistantUserReducer;
