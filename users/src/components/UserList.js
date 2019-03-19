import React, { Component } from "react";
import User from "./User";

export class UserList extends Component {
  render() {
    return (
      <div>
        <h2>UserList</h2>
        {this.props.users.map(user => (
          <User
            user={user}
            key={user.id}
            deleteUser={this.props.deleteUser}
            getUsers={this.props.getUsers}
          />
        ))}
      </div>
    );
  }
}

export default UserList;
