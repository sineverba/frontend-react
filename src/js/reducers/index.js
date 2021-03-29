import { combineReducers } from 'redux';
import ping from "./app/ping";
import login from "./app/login";

export default combineReducers(
  {
    ping,
    login,
  }
);