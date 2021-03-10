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
      <AccountsPresentational accountsList={this.props.accountsList} isLoading={this.props.isLoading} />
    );
  }
}

function mapStateToProps(state) {
  return {
    accountsList: state.accountsList,
    isLoading: state.isLoading
  };
}

export default connect(
  mapStateToProps,
  { fetchAccountsList }
)(Accounts);