import { combineReducers } from 'redux';
import ping from "./app/ping";
import accounts from "./app/accounts";
import frontendVersion from "./app/frontendVersion";

export default combineReducers(
  {
    frontendVersion,
    ping,
    accounts
  }
);