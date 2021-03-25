import { combineReducers } from 'redux';
import ping from "./app/ping";
import accounts from "./app/accounts";
import login from "./app/login";

export default combineReducers(
  {
    accounts,
    ping,
    login,
  }
);