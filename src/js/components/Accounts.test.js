import { fetchAccountsList } from "../actions/index";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from "nock";

// declare middlewares
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore({});

describe('Testing fetchAccountsList()', () => {

  beforeEach(() => {
    store.clearActions();
  });
  it('Should get LOADED_ACCOUNTS_LIST_SUCCESSFULLY', async () => {
    const payload = {
      data: [
        {
          "id": 1,
          "email": "info@example.com",
          "created_at": "2020-05-02 12:23:34",
          "updated_at": "2020-05-02 12:23:34",
        }
      ]
    };
      
    nock('https://backend-flaskrestx.herokuapp.com/api/v1')
    .get('/accounts')
    .reply(200,
      payload,
      {'Access-Control-Allow-Origin': '*'}
    );

    let expectedActions = [{
      type: "LOADED_ACCOUNTS_LIST_SUCCESSFULLY",
      payload: payload
    }];

    await store.dispatch(fetchAccountsList()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
})
