const initialState = {
    isLoading: true,
    roles: [],
    total: 0,
};

const roles = (state = initialState, action) => {
    switch (action.type) {
        case "TRY_FETCH_ROLES_COLLECTION":
        case "TRY_FETCH_ROLES": {
            return Object.assign({}, state, {
                isLoading: true
            });
        }
      
        case "FETCH_ROLES_COLLECTION_SUCCEEDED": {
            return Object.assign({}, state, {
                isLoading: false,
                roles: action.data && action.data.data && action.data.data.length > 0 ? action.data.data : [],
                total: action.data && action.data.total ? action.data.total : 0
            });
        }

        case "FETCH_ROLES_SUCCEEDED": {
            return Object.assign({}, state, {
                isLoading: false,
                role: action.data ? action.data : null
            });
        }

        case "FETCH_ROLES_COLLECTION_FAILED":
        case "FETCH_ROLES_FAILED": {
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