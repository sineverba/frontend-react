import { LOADED_API_VERSION_SUCCESSFULLY } from "../constants/action-types";
import { fetchBackendApiVersion } from "../actions/index";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from "nock";

describe('Testing fetchBackendApiVersion()', () => {

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const store = mockStore({});

  beforeEach(() => {
    store.clearActions();
  });
  it('Should get LOADED_API_VERSION_SUCCESSFULLY', async () => {
    const payload = {
      "status": "success",
      "message": "system up and running",
      "api_version": "0.4.0"
    };
      
    nock(process.env.REACT_APP_BACKEND_URL || 'https://backend-flaskrestx.herokuapp.com/api/v1')
    .get('/ping')
    .reply(200,
      payload,
      {'Access-Control-Allow-Origin': '*'}
    );

    let expectedActions = [{
      type: LOADED_API_VERSION_SUCCESSFULLY,
      payload: payload
    }];

    await store.dispatch(fetchBackendApiVersion()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
})
