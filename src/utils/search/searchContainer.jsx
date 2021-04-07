import React from "react";
import { connect } from "react-redux";
import Search from "./search";
import { findUsers } from "../../redux/users-reducer";


class SearchContainer extends React.Component {

  submit = values => {
    this.props.findUsers(values.usersName)
  }

  render () {
    return (
      <Search onSubmit={this.submit} />
    );
  };
};

export default connect (null, { findUsers })(SearchContainer);