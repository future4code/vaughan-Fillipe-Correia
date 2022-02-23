import "./register.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleUser = (event) => {
    setUser(event.target.value);
  };

  const submitSignup = () => {
    const body = {
      username: user,
      email: email,
      password: password,
  }
  axios.post("https://labeddit.herokuapp.com/users/signup", body)
  .then(res => {
    console.log(res);
    console.log(res.data);
    alert("You have successfully registered!");
  })
  .catch(err => {
    console.log(err);
  })
  }


  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Labeddit</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Labebook.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input onChange={handleUser} placeholder="Username" className="loginInput" />
            <input onChange={handleEmail} placeholder="Email" className="loginInput" />
            <p>Password must have at least 8 caracters</p>
            <input onChange={handlePassword} placeholder="Password" className="loginInput" />
            <button onClick={submitSignup} className="loginButton">Sign Up</button>
            <Link style={{textDecoration: "none", alignItems: "center", justifyContent: "center"}} className="loginRegisterButton" to="/">
            Log into account

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
