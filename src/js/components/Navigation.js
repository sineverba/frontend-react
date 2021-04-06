import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Fragment, useState } from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const Navigation = (props) => {

    const [isToggled, setIsToggled] = useState(false)

    const toggleSidebar = () => {
        setIsToggled(!isToggled);
    }

    return (
            <ul className={`navbar-nav bg-gradient-primary sidebar sidebar-dark accordion ${isToggled ? 'toggled' : ''}`} id="accordionSidebar">
                <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-text mx-3">FE React</div> 
                </Link>
                
                <hr className="sidebar-divider my-0" />
                {
                    props.accessToken &&
                        <Fragment>
                            <li className="nav-item"><Link to="/dashboard" className="nav-link"><span>Dashboard</span></Link></li>
                            <li className="nav-item"><Link to="/roles" className="nav-link"><span>Roles</span></Link></li>
                        </Fragment>
                }

                <hr className="sidebar-divider d-none d-md-block" />
                <div className="text-center d-none d-md-inline">
                    <Button className="rounded-circle border-0" onClick={toggleSidebar}>
                        <FontAwesomeIcon icon={isToggled ? faArrowRight : faArrowLeft} />
                    </Button>
                </div>

                
            </ul>
    );
}

export const mapStateToProps = (state) => {
    return {
        accessToken: state.login.accessToken ? state.login.accessToken : null
    };
}

export default connect(
    mapStateToProps,
    null
)(Navigation);