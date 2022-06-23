import React, { Component } from "react";
import "./App.css";
import UserForm from "./components/UserForm.jsx";
import HookForm from "./components/HookForm.jsx";
import CreateServer from "./components/CreateServer.jsx";
import UserProfile from "./components/UserProfile.jsx";
import UserProfile2 from "./components/UserProfile2.jsx";

export default class App extends Component {
  state = {
    fields: {},
  };

  onSubmit = (fields) => {
    console.log("index comp got : ", fields);
  };

  render() {
    return (
      <div className="index">
        <UserForm onSubmit={(fields) => this.onSubmit(fields)} />
        <HookForm />
        <CreateServer />
        <UserProfile />
        <UserProfile2 />
      </div>
    );
  }
}
