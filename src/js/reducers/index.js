import { LOADED_API_VERSION_SUCCESSFULLY } from "../constants/action-types";

const initialState = {
  apiVersion: null
};

function rootReducer(state = initialState, action) {

  if (action.type === LOADED_API_VERSION_SUCCESSFULLY) {
    return Object.assign({}, state, {
      apiVersion: action.payload.api_version
    });
  }

  return state;
};

export default rootReducer;