import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAccountsList } from "../../actions/index";
import AccountsPresentational from "../presentationals/AccountsPresentational";

export class Accounts extends Component {

  componentDidMount() {
    this.props.fetchAccountsList();
  }

  render() {
    return (
      <AccountsPresentational accountsList={this.props.accountsList} />
    );
  }
}

function mapStateToProps(state) {
  return {
    accountsList: state.accountsList
  };
}

export default connect(
  mapStateToProps,
  { fetchAccountsList }
)(Accounts);