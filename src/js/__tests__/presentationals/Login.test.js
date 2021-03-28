import nock from "nock";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { HomePresentational, mapStateToProps, mapDispatchToProps } from "../../components/presentationals/HomePresentational";

describe('Testing Login Form', () => {

    configure({adapter: new Adapter()})
    
    const initialState = {
        login: {
            isLoading: false,
        }
    }
    it ('Test call function', () => {
        const login = jest.fn();
        const wrapper = shallow(<HomePresentational login={login} />);
        wrapper.find('Button').simulate('click', {
            preventDefault: () => {}
        });
        expect(login).toHaveBeenCalledTimes(1);
    });

    it ('Test mapStateToProps', () => {
        const props = mapStateToProps(initialState);
        expect(props.isLoading).toBeFalsy();
    });

    it ('Test mapDispatchToProps', () => {
        const dispatch = jest.fn();
        const props = mapDispatchToProps(dispatch);
        props.login();
        expect(dispatch).toHaveBeenCalledWith(expect.any(Function));
    });

})