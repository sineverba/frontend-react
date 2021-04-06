import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actions as loginActions } from "../actions/LoginActions";
import { Fragment } from "react";
import { Button } from "react-bootstrap";

export const Navigation = (props) => {

  const logout = (e) => {
      e.preventDefault();
      props.logout();
  }

  return (
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
          <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
              <div className="sidebar-brand-text mx-3">FE React</div> 
          </Link>
          
          <hr class="sidebar-divider my-0" />

          <li className="nav-item"><Link to="/" className="nav-link"><span>Home</span></Link></li>
          {
            props.accessToken &&
                <Fragment>
                    <li className="nav-item"><Link to="/dashboard" className="nav-link"><span>Dashboard</span></Link></li>
                    <li className="nav-item"><Link to="/roles" className="nav-link"><span>Roles</span></Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link" onClick={logout}><span>Logout</span></Link></li>
                </Fragment>
          }

          <hr class="sidebar-divider d-none d-md-block" />
          <Button className="rounded-circle border-0">
              Close
          </Button>

        
      </ul>
  );
}

export const mapStateToProps = (state) => {
    return {
        accessToken: state.login.accessToken ? state.login.accessToken : null
    };
}

export const mapDispatchToProps = (dispatch) => {
    return {
      logout: () => dispatch(loginActions.logout())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);