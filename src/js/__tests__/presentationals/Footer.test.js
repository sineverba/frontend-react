import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from "nock";
import { shallow, configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FooterPresentational from '../../components/presentationals/FooterPresentational';
import { render } from '@testing-library/react';
import { actions as pingActions } from "../../actions/PingActions";

describe('Testing Footer Component', () => {

  const payload = {
    "app_version": "1.1.1"
  };

  nock(process.env.REACT_APP_BACKEND_URL || 'https://backend-flaskrestx.herokuapp.com/api/v1')
  .get('/ping')
  .reply(200,
        payload,
        {'Access-Control-Allow-Origin': '*'}
  );

  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const initialState = {
    ping: {
      appVersion: "2.2.2",
      apiVersion: "1.1.1"
    },
    fetch: () => dispatch(pingActions.readAll())
  }
  const store = mockStore(initialState);

  configure({adapter: new Adapter()})

  beforeEach(() => {
    store.clearActions();
  });

  it('Should get appVersion in props', () => {

    let wrapper = shallow(<FooterPresentational store={store} />);
    expect(wrapper.props().children.props.ping).toBe(initialState.appVersion);

  });


  it('Should renders footer text', () => {
    const { getByText } = render(<FooterPresentational store={store} />);
    expect(getByText('Backend Api Version: 1.1.1 - Frontend Version: 2.2.2')).toBeTruthy();
  });
})
