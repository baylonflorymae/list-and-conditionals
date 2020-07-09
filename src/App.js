import React, { Component } from "react";
import "./App.css";
import ListOfUsers from "./ListOfUsers/ListOfUsers";

class App extends Component {
  state = {
    persons: [],
    firstName: "",
    lastName: "",
    userName: "",
    passWord: "",
    isEditing: false,
    editIndex: null,
  };

  userInputHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.persons === "") {
      return;
    }

    const newPerson = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      passWord: this.state.passWord,
      id: Date.now(),
    };

    // console.log(newPerson);

    this.setState((state) => ({
      persons: [newPerson, ...state.persons],
      firstName: "",
      lastName: "",
      userName: "",
      passWord: "",
    }));
  };

  editPersonHandler = (e, index) => {
    e.preventDefault();
    const person = this.state.persons.slice();

    // console.log(person);

    person[this.state.editIndex] = {
      id: this.state.persons[this.state.editIndex],
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      passWord: this.state.passWord,
    };

    this.setState({
      persons: person,
      isEditing: false,
      editIndex: index,

      firstName: "",
      lastName: "",
      userName: "",
      passWord: "",
    });
  };

  editSubmitHandler = (person, index) => {
    this.setState({
      firstName: person.firstName,
      lastName: person.lastName,
      userName: person.userName,
      passWord: person.passWord,
      editIndex: index,
      isEditing: true,
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="text-center"> List and Conditional Problem </h1>
        </header>
        <div className="container">
          <form
            onSubmit={
              this.state.isEditing
                ? this.editPersonHandler.bind(this)
                : this.handleSubmit.bind(this)
            }
          >
            <div className="form-row">
              <div className="col-md-6 mb-3">
                <label htmlFor="fname">
                  <b>First Name:</b>
                </label>
                <input
                  type="text"
                  id="fname"
                  placeholder="First Name"
                  className="form-control"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.userInputHandler.bind(this)}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="lname">
                  <b>Last Name:</b>
                </label>
                <input
                  type="text"
                  id="lname"
                  placeholder="Last Name"
                  className="form-control"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.userInputHandler.bind(this)}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="userName">
                  <b>Username:</b>
                </label>
                <input
                  type="email"
                  id="userName"
                  placeholder="Username"
                  className="form-control"
                  name="userName"
                  value={this.state.userName}
                  onChange={this.userInputHandler.bind(this)}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="password">
                  <b>Password:</b>
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="form-control"
                  name="passWord"
                  value={this.state.passWord}
                  onChange={this.userInputHandler.bind(this)}
                  required
                />
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-primary">
                {this.state.isEditing ? "Save Changes" : "Submit"}
              </button>
            </div>
          </form>
          <ListOfUsers
            persons={this.state.persons}
            editSubmitHandler={this.editSubmitHandler.bind(this)}
            deletePersonHandler={this.deletePersonHandler.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
