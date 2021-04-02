import moment from "moment";

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
                const expiresIn = action.data.expires_in;
                // Divide by 2, to have a security margin
                const expireAt = moment().add(expiresIn/2, 'seconds').format('DD/MM/YYYY HH:mm:ss')
                /*console.log(expireAt)
                const isExpired = moment(expireAt, 'DD/MM/YYYY HH:mm:ss').isBefore(moment())
                console.log(isExpired)*/
                localStorage.setItem('REACT_FE_ACCESS_TOKEN', accessToken);
                localStorage.setItem('REACT_FE_ACCESS_TOKEN_EXPIRES_AT', expireAt);
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
            localStorage.removeItem('REACT_FE_ACCESS_TOKEN_EXPIRES_AT')
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