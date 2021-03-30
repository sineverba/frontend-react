import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const AuthRouter = props => {
    const { accessToken, type } = props;
    if (type === "guest" && accessToken) {
        return <Redirect to="/dashboard" />
    } else if (type === "private" && !accessToken) {
        return <Redirect to="/" />
    }

    return <Route {...props} />;
};

const mapStateToProps = (state) => ({
    accessToken: state.login.accessToken ? state.login.accessToken : null
});

export default connect(mapStateToProps)(AuthRouter);