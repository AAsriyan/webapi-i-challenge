import React, { Component } from "react";
import UserList from "./components/UserList";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    name: "",
    bio: ""
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:4000/api/users")
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => console.log(err));
  };

  handleFormChanges = e => {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value });
  };

  addUser = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      bio: this.state.bio
    };

    axios
      .post("http://localhost:4000/api/users", newUser)
      .then(res => {
        console.log(res);
        axios
          .get("http://localhost:4000/api/users")
          .then(res => {
            this.setState({ users: res.data });
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));

    this.setState({
      name: "",
      bio: ""
    });
  };

  deleteUser = (e, id) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <h1>App works</h1>
        <UserList users={this.state.users} />
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            autoComplete="off"
            value={this.state.name}
            onChange={this.handleFormChanges}
          />
          <input
            type="text"
            name="bio"
            placeholder="Bio"
            required
            autoComplete="off"
            value={this.state.bio}
            onChange={this.handleFormChanges}
          />
          <button>Submit User</button>
        </form>
      </div>
    );
  }
}

export default App;
