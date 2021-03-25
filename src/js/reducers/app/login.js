const initialState = {
    isLoading: false
};

const login = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case "TRY_POST_LOGIN": {
            return Object.assign({}, state, {
                isLoading: true
            });
        }
      
        case "LOGIN_POST_SUCCEEDED": {
            return Object.assign({}, state, {
                isLoading: false,
                accessToken: action.data && action.data.access_token ? action.data.access_token : null
            });
        }

        case "LOGIN_POST_FAILED": {
            return Object.assign({}, state, {
                isLoading: false
            });
        }
          
        default: {}
    }  
    return state;
}
export default login;