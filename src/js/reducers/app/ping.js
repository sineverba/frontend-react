const initialState = {
    isLoading: true,
    appVersion: process.env.ENV === 'test' ? 'test': process.env.REACT_APP_APP_VERSION || 'N.D.'
};

const ping = (state = initialState, action) => {
    switch (action.type) {
        case "TRY_FETCH_PING_COLLECTION": {
            return Object.assign({}, state);
        }
      
        case "FETCH_PING_COLLECTION_SUCCEEDED": {
            return Object.assign({}, state, {
                isLoading: false,
                apiVersion: action.data && action.data.app_version ? action.data.app_version : 'N.D.',
            });
        }

        case "FETCH_PING_COLLECTION_FAILED": {
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        }
          
        default: {}
    }  
    return state;
}
export default ping;