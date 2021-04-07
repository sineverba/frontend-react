const initialState = {
    isLoading: true,
    users: 'N.D.',
    roles: 'N.D.',
};

const stats = (state = initialState, action) => {
    switch (action.type) {
        case "TRY_FETCH_STATS_COLLECTION": {
            return Object.assign({}, state);
        }
      
        case "FETCH_STATS_COLLECTION_SUCCEEDED": {
            return Object.assign({}, state, {
                isLoading: false,
                users: action.data.users ? action.data.users : 'N.D.',
                roles: action.data.roles ? action.data.roles : 'N.D.'
            });
        }

        case "FETCH_STATS_COLLECTION_FAILED": {
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        }
          
        default: {}
    }  
    return state;
}
export default stats;