import { LOGIN_REQUEST } from "../constants/action-types";

const credentialReducer = (state = [], action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state, values:action.payload};
    default:
      return state;
  }
};

export default credentialReducer;
