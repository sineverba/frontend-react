import { TRY_LOADING, LOADED_API_VERSION_SUCCESSFULLY, LOADED_ACCOUNTS_LIST_SUCCESSFULLY } from "../constants/action-types";
import API from "../../api/api";

export function fetchBackendApiVersion() {
  return function(dispatch) {
    return API.get("/ping")
    .then(res => {
      dispatch({ type: LOADED_API_VERSION_SUCCESSFULLY, payload: res.data});
    });
  };
}

export function fetchAccountsList() {
  return function(dispatch) {
    dispatch({
      type: TRY_LOADING
    });
    return API.get("/accounts")
    .then(res => {
      dispatch({ type: LOADED_ACCOUNTS_LIST_SUCCESSFULLY, payload: res.data});
    });
  };
}

export function fetchFrontendApiVersion() {
  return function(dispatch) {
    return null;
  }
}