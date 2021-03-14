import { TRY_LOADING, LOADED_ACCOUNTS_LIST_SUCCESSFULLY } from "../constants/action-types";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from "nock";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AccountsPresentational from '../components/presentationals/AccountsPresentational';
import { render } from '@testing-library/react';
import { actions as accountsAction } from "../actions/AccountsAction";

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
    accounts: {
      accountsList: payload
    },
    fetch: () => dispatch(accountsAction.readAll())
  }
  const store = mockStore(initialState);

  configure({adapter: new Adapter()})

  beforeEach(() => {
    store.clearActions();
  });

  it('Should get accountsList in props', async () => {

    let wrapper = shallow(<AccountsPresentational store={store} />);
    expect(wrapper.props().children.props.accountsList).toBe(payload.data);

  });

  it('Should renders a username', () => {
    const { getByText } = render(<AccountsPresentational store={store} />);
    expect(getByText('info@example.com')).toBeTruthy();
  });
})
