import { LOADED_API_VERSION_SUCCESSFULLY } from "../../constants/action-types";

function ping(state = {}, action) {
    switch (action.type) {
        case LOADED_API_VERSION_SUCCESSFULLY: {
            return Object.assign({}, state, {
                apiVersion: action.payload.api_version,
                isLoading: false
            });
        }
        default: {}
    }  
    return state;
};
  
export default ping;