import stats from "../../reducers/app/stats";

describe ('stats reducers', () => {
    const initialState = {
        isLoading: true,
        users: 'N.D.',
        roles: 'N.D.',
    }

    it ('Should handle TRY_FETCH_STATS_COLLECTION', () => {
        const action = {
            type: "TRY_FETCH_STATS_COLLECTION"
        };
        expect(stats(initialState, action)).toEqual({
            isLoading: true,
            users: 'N.D.',
            roles: 'N.D.',
        })
    });

    it ('Should handle FETCH_STATS_COLLECTION_SUCCEEDED', () => {
        const action = {
            type: "FETCH_STATS_COLLECTION_SUCCEEDED",
            data: {
                users: 1,
                roles: 1
            }
        };
        expect(stats(initialState, action)).toEqual({
            isLoading: false,
            users: 1,
            roles: 1,
        })
    })

    it ('Should handle FETCH_STATS_COLLECTION_FAILED', () => {
        const action = {
            type: "FETCH_STATS_COLLECTION_FAILED",
            error: "error"
        };
        expect(stats(initialState, action)).toEqual({
            isLoading: false,
            users: 'N.D.',
            roles: 'N.D.',
            error: "error",
        })
    })
})