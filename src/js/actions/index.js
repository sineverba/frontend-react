import { LOADED_API_VERSION_SUCCESSFULLY } from "../constants/action-types";

export function fetchBackendApiVersion() {
  return function(dispatch) {
    return fetch("https://backend-flaskrestx.herokuapp.com/api/v1/ping")
    .then(response => response.json())
    .then(json => {
      dispatch({ type: LOADED_API_VERSION_SUCCESSFULLY, payload: json});
    });
  };
}