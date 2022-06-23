import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Phone from "./PhoneNumber.jsx";

const initialState = {
  firstName: "",
  middleName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
  firstNameError: "",
  lastNameError: "",
  phoneError: "",
  emailError: "",
  passwordError: "",
  confirmError: "",
};

export default class UserForm extends React.Component {
  state = initialState;

  change = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validateForm = (b) => {
    let firstNameError = "";
    let lastNameError = "";
    let passwordError = "";
    let confirmError = "";
    let emailError = "";

    console.log(typeof this.state.firstName);

    if (this.state.firstName.length < 2) {
      firstNameError = "*invalid length";
    }
    if (this.state.lastName.length < 2) {
      lastNameError = "*invalid length";
    }
    if (!this.state.email.includes("@")) {
      emailError = "*invalid email";
    }
    if (this.state.password !== this.state.confirmPassword) {
      passwordError = "*password doesn't match";
    } else if (this.state.password < 4) {
      passwordError = "*password should be atleast more than 4";
    } else if (!this.state.confirmPassword) {
      confirmError = "*confirm password is required";
    } else {
      return true;
    }

    if (emailError || firstNameError || lastNameError || confirmError) {
      this.setState({
        emailError,
        firstNameError,
        lastNameError,
        passwordError,
        confirmError,
      });
      return false;
    }
    return true;
  };

  onSubmit = (e) => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    const isValid = this.validateForm();
    if (isValid) {
      console.log(this.state);
      //clear htmlForm
      this.setState(initialState);
    }
  };
  onCancle = (e) => {
    this.setState(initialState);
  };

  render() {
    return (
      <form className="flex flex-col px-2 py-2 m-2 bg-gray-100 md:px-5">
        <div className="font-serif text-2xl text-center text-gray-600">
          <h1>Let's Create an Account</h1>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className="flex flex-col m-2 md:w-1/3">
            <label className="ml-2 text-sm text-gray-500" htmlFor="firstName">
              First Name
            </label>
            <input
              className="border-2 border-gray-300 rounded-full"
              name="firstName"
              value={this.state.firstName}
              onChange={(e) => this.change(e)}
              required
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.firstNameError}
            </div>
          </div>
          <div className="flex flex-col m-2 md:w-1/3">
            <label className="ml-2 text-sm text-gray-500" htmlFor="firstName">
              Middle Name
            </label>
            <input
              className="border-2 border-gray-300 rounded-full"
              name="middleName"
              value={this.state.middleName}
              onChange={(e) => this.change(e)}
            />
          </div>
          <div className="flex flex-col m-2 md:w-1/3 ">
            <label className="ml-2 text-sm text-gray-500" htmlFor="lastName">
              Last Name
            </label>
            <input
              required
              className="border-2 border-gray-300 rounded-full"
              name="lastName"
              value={this.state.lastName}
              onChange={(e) => this.change(e)}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.lastNameError}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col m-2 md:w-1/2">
            <label className="ml-2 text-sm text-gray-500" htmlFor="email">
              Email Address
            </label>
            <input
              required
              className="border-2 border-gray-300 rounded-full"
              name="email"
              value={this.state.email}
              onChange={(e) => this.change(e)}
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.emailError}
            </div>
          </div>
          <div className="flex flex-col m-2 md:w-1/2">
            <label className="ml-2 text-sm text-gray-500" htmlFor="phoneNumber">
              Phone Number
            </label>
            <Phone />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.phoneError}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col m-2 md:w-1/2">
            <label className="ml-2 text-sm text-gray-500">Password</label>
            <input
              required
              name="password"
              type="password"
              className="border-2 border-gray-300 rounded-full"
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.passwordError}
            </div>
          </div>
          <div className="flex flex-col m-2 md:w-1/2">
            <label className="ml-2 text-sm text-gray-500">
              Confirm Password
            </label>
            <input
              required
              name="confirmPassword"
              type="password"
              className="border-2 border-gray-300 rounded-full "
            />
            <div style={{ fontSize: 12, color: "red" }}>
              {this.state.confirmError}
            </div>
          </div>
        </div>
        <div className="flex border-t-2 border-gray-400 md:mt-2 ">
          <button
            type="submit"
            className="inline-flex items-center justify-center px-5 py-2 m-1 text-sm leading-tight text-white bg-green-400 rounded-lg md:w-1/3 hover:bg-green-500 focus:outline-none"
            onClick={(e) => this.onSubmit(e)}
          >
            Proceed as individual
          </button>
          <button
            type="submit"
            className="inline-flex items-center justify-center px-5 py-2 m-1 text-sm leading-tight text-white bg-green-400 rounded-lg md:w-1/3 hover:bg-green-500 focus:outline-none"
            onClick={(e) => this.onSubmit(e)}
          >
            Proceed as Company
          </button>
          <button
            type="submit"
            className="inline-flex items-center justify-center px-5 py-2 m-1 text-sm leading-tight text-white bg-green-400 rounded-lg md:w-1/3 hover:bg-green-500 focus:outline-none"
            onClick={(e) => this.onCancle(e)}
          >
            Cancle
          </button>
        </div>
        <p className="text-center underline underline-offset-1">
          Already Registered
        </p>
      </form>
    );
  }
}
