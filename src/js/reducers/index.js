import { LOADED_API_VERSION_SUCCESSFULLY, LOADED_ACCOUNTS_LIST_SUCCESSFULLY } from "../constants/action-types";

const initialState = {
  apiVersion: null,
  frontendVersion: '0.4.0',
  accountsList: []
};

function rootReducer(state = initialState, action) {

  switch (action.type) {

    case LOADED_API_VERSION_SUCCESSFULLY: {
      return Object.assign({}, state, {
        apiVersion: action.payload.api_version
      });
    }

    case LOADED_ACCOUNTS_LIST_SUCCESSFULLY: {
      return Object.assign({}, state, {
        accountsList: action.payload.data
      });
    }

    default: {}
  }

  return state;
};

export default rootReducer;