import { combineReducers } from 'redux';
import ping from "./app/ping";
import login from "./app/login";
import roles from "./app/roles";

export default combineReducers(
  {
    ping,
    login,
    roles,
  }
);