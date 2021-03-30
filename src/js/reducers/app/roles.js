const initialState = {
    isLoading: true,
};

const roles = (state = initialState, action) => {
    switch (action.type) {
        case "TRY_FETCH_ROLES_COLLECTION": {
            return Object.assign({}, state);
        }
      
        case "FETCH_ROLES_COLLECTION_SUCCEEDED": {
            return Object.assign({}, state, {
                isLoading: false,
            });
        }

        case "FETCH_ROLES_COLLECTION_FAILED": {
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        }
          
        default: {}
    }  
    return state;
}
export default roles;