import { LOADED_API_VERSION_SUCCESSFULLY } from "../constants/action-types";
import API from "../../api/api";

export function fetchBackendApiVersion() {
  return function(dispatch) {
    return API.get("/ping")
    .then(res => {
      dispatch({ type: LOADED_API_VERSION_SUCCESSFULLY, payload: res.data});
    });
  };
}

export function fetchFrontendApiVersion() {
  return function(dispatch) {
    return null;
  }
}