import { LOADED_API_VERSION_SUCCESSFULLY } from "../constants/action-types";

const initialState = {
  apiVersion: null,
  frontendVersion: '0.1.0'
};

function rootReducer(state = initialState, action) {

  switch (action.type) {
    case LOADED_API_VERSION_SUCCESSFULLY: {
      return Object.assign({}, state, {
        apiVersion: action.payload.api_version
      });
    }
    default: {}
  }

  return state;
};

export default rootReducer;