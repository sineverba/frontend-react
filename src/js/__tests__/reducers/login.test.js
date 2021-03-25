import login from '../../reducers/app/login'

describe('login reducers', () => {

    const initialState = {
        isLoading: false,
    }

    it('Should return initial state', () => {
        expect(login(undefined, {})).toEqual(
            {
                isLoading: false,
            }
        )
    });

    it('Should handle TRY_POST_LOGIN', () => {
        let action = {
            type: "TRY_POST_LOGIN"
        }
        expect(login(initialState, action)).toEqual(
            {
                isLoading: true,
            }
        )
    });

    it('Should handle LOGIN_POST_SUCCEEDED', () => {
        let action = {
            type: "LOGIN_POST_SUCCEEDED"
        }
        expect(login(initialState, action)).toEqual(
            {
                isLoading: false,
                accessToken: null
            }
        )
    });

    it('Should handle LOGIN_POST_FAILED', () => {
        let action = {
            type: "LOGIN_POST_FAILED"
        }
        expect(login(initialState, action)).toEqual(
            {
                isLoading: false,
            }
        )
    });
})