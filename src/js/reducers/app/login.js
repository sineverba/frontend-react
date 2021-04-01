const initialState = {
    isLoading: false,
};

const login = (state = initialState, action) => {
    switch (action.type) {
        case "TRY_POST_LOGIN": {
            return Object.assign({}, state, {
                isLoading: true
            });
        }
      
        case "LOGIN_POST_SUCCEEDED": {
            const accessToken = action.data && action.data.access_token ? action.data.access_token : null
            if (accessToken) {
                localStorage.setItem('REACT_FE_ACCESS_TOKEN', accessToken)
            }
            return Object.assign({}, state, {
                isLoading: false,
                accessToken: accessToken,
            });
        }

        case "LOGIN_POST_FAILED": {
            return Object.assign({}, state, {
                isLoading: false
            });
        }

        case "LOGOUT": {
            localStorage.removeItem('REACT_FE_ACCESS_TOKEN')
            return Object.assign({}, state, {
                isLoading: false,
                accessToken: null,
            });
        }

        case "CHECK_TOKEN": {
            const accessToken = localStorage.getItem('REACT_FE_ACCESS_TOKEN');
            if (accessToken) {
                return Object.assign({}, state, {
                    isLoading: false,
                    accessToken: accessToken,
                });
            }
            return Object.assign({}, state, {});
        }

          
        default: {}
    }  
    return state;
}
export default login;