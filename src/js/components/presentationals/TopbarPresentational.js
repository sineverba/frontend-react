import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { actions as loginActions } from "../../actions/LoginActions";

export const TopbarPresentational = (props) => {

    const logout = () => {
        props.logout();
    }

    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow">
                    <Link to="#" className="nav-link dropdown-toggle" onClick={logout}>
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">LOGOUT</span>
                    </Link>
                </li>

            </ul>
        </nav>
    )
}

export const mapDispatchToProps = (dispatch) => {
    return {
      logout: () => dispatch(loginActions.logout())
    }
}

export default connect(
    null,
    mapDispatchToProps
)(TopbarPresentational);