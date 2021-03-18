import ping from '../../reducers/app/ping'

describe('ping reducers', () => {

    const initialState = {
        isLoading: true,
        appVersion: 'test'
    }

    it('Should return initial state', () => {
        expect(ping(undefined, {})).toEqual(
            {
                isLoading: true,
                appVersion: 'test'
            }
        )
    });

    it('Should handle TRY_LOADING', () => {
        let action = {
            type: "TRY_FETCH_PING_COLLECTION"
        }
        expect(ping(initialState, action)).toEqual(
            {
                isLoading: true,
                appVersion: 'test'
            }
        )
    })
})