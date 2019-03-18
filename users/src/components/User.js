import React, { Component } from "react";
import axios from "axios";

export class User extends Component {
  state = {
    isEditing: false,
    name: "",
    bio: ""
  };

  handleEdit = e => {
    e.preventDefault();

    this.state.isEditing
      ? this.setState({ isEditing: false })
      : this.setState({ isEditing: true });
  };

  handleUserChanges = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  updateUser = (e, id) => {
    e.preventDefault();

    const updatedUser = {
      name: this.state.name,
      bio: this.state.bio
    };

    axios
      .put(`http://localhost:4000/api/users/${id}`, updatedUser)
      .then(res => {
        console.log(res);
        this.props.getUsers();
      })
      .catch(err => {
        console.log(err);
      });

    this.setState({
      isEditing: false,
      name: "",
      bio: ""
    });
  };

  render() {
    if (this.state.isEditing) {
      return (
        <form onSubmit={e => this.updateUser(e, this.props.user.id)}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            autoComplete="off"
            value={this.state.name}
            onChange={this.handleUserChanges}
          />
          <input
            type="text"
            name="bio"
            placeholder="Bio"
            required
            autoComplete="off"
            value={this.state.bio}
            onChange={this.handleUserChanges}
          />
          <button onClick={this.handleEdit}>Cancel</button>
          <button>Submit</button>
        </form>
      );
    } else {
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
          <button onClick={e => this.props.deleteUser(e, this.props.user.id)}>
            Delete
          </button>
          <button onClick={this.handleEdit}>Update</button>
        </div>
      );
    }
  }
}

export default User;
