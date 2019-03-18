import React, { Component } from "react";

export class User extends Component {
  state = {
    isEditing: false
  };

  handleEdit = e => {
    e.preventDefault();

    this.state.isEditing
      ? this.setState({ isEditing: false })
      : this.setState({ isEditing: true });
  };

  render() {
    return (
      <div>
        <h2>
          <span>Name: </span>
          {this.props.user.name}
        </h2>
        <p>
          <span>Bio: </span>
          {this.props.user.bio}
        </p>
        <p>
          <span>id: </span>
          {this.props.user.id}
        </p>
      </div>
    );
  }
}

export default User;
