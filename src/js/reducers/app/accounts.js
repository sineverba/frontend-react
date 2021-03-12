import { TRY_LOADING, LOADED_ACCOUNTS_LIST_SUCCESSFULLY } from "../../constants/action-types";

function accounts(state = {}, action) {
    switch (action.type) {
        case TRY_LOADING: {
            return Object.assign({}, state, {
              isLoading: true
            });
          }
      
          case LOADED_ACCOUNTS_LIST_SUCCESSFULLY: {
            return Object.assign({}, state, {
              accountsList: action.payload.data,
              isLoading: false
            });
          }
          default: {}
    }  
    return state;
};
  
export default accounts;