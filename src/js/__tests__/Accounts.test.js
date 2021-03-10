import { fetchAccountsList } from "../actions/index";
import { TRY_LOADING, LOADED_ACCOUNTS_LIST_SUCCESSFULLY } from "../constants/action-types";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from "nock";
import Accounts from "../components/connected/Accounts";
import { shallow, configure } from "enzyme";
import React from "react";
import Adapter from "enzyme-adapter-react-16";

describe('Testing fetchAccountsList()', () => {

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

  nock(process.env.REACT_APP_BACKEND_URL || 'https://backend-flaskrestx.herokuapp.com/api/v1')
  .get('/accounts')
  .reply(200,
        payload,
        {'Access-Control-Allow-Origin': '*'}
  );

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = {
    accountsList: payload
  }
  const store = mockStore(initialState);

  configure({adapter: new Adapter()})

  beforeEach(() => {
    store.clearActions();
  });

  it('Should get LOADED_ACCOUNTS_LIST_SUCCESSFULLY', async () => {
      
    let expectedActions = [
      {
        type: TRY_LOADING
      },
      {
        type: LOADED_ACCOUNTS_LIST_SUCCESSFULLY,
        payload: payload
      }
    ];

    await store.dispatch(fetchAccountsList()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should get accountsList in props', async () => {

    let wrapper = shallow(<Accounts store={store} />);
    expect(wrapper.props().children.props.accountsList).toBe(payload);

  });
})
