import { combineReducers } from 'redux';
import ping from "./app/ping";
import accounts from "./app/accounts";

export default combineReducers(
  {
    accounts,
    ping
  }
);