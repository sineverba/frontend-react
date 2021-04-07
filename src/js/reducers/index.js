import { combineReducers } from 'redux';
import ping from "./app/ping";
import login from "./app/login";
import roles from "./app/roles";
import stats from "./app/stats";

export default combineReducers(
  {
    ping,
    login,
    roles,
    stats,
  }
);