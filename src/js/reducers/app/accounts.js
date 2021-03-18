const initialState = {
    isLoading: true
};

const accounts = (state = initialState, action) => {
    switch (action.type) {
        case "TRY_FETCH_ACCOUNTS_COLLECTION": {
            return Object.assign({}, state);
        }
      
        case "FETCH_ACCOUNTS_COLLECTION_SUCCEEDED": {
            return Object.assign({}, state, {
                isLoading: false,
                accountsList: action.data,
            });
        }

        case "FETCH_ACCOUNTS_COLLECTION_FAILED": {
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        }
          
        default: {}
    }  
    return state;
}
export default accounts;