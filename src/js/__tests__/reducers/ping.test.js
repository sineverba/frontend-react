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
    });

    it('Should handle FETCH_PING_COLLECTION_SUCCEEDED', () => {
        let action = {
            type: "FETCH_PING_COLLECTION_SUCCEEDED"
        }
        expect(ping(initialState, action)).toEqual(
            {
                isLoading: false,
                apiVersion: 'N.D.',
                appVersion: 'test',
            }
        )
    });

    it('Should handle FETCH_PING_COLLECTION_FAILED', () => {
        let action = {
            type: "FETCH_PING_COLLECTION_FAILED"
        }
        expect(ping(initialState, action)).toEqual(
            {
                isLoading: false,
                appVersion: 'test',
                error: undefined
            }
        )
    });
})