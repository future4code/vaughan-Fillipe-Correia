import "./login.css";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     navigate("/home");
  //   }
  // }, []);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const submitLogin = () => {
    setLoading(true);
    const body = {
      email: email,
      password: password,
  }
  axios.post("https://labeddit.herokuapp.com/users/login", body)
  .then(res => {
    setLoading(false);
    localStorage.setItem("token", res.data.token);
    window.location.href = "/home";
  })
  .catch(err => {
    setLoading(false);
    console.log(err);
  })
  }


  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Labeddit</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Labebook
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <h2>Login</h2>
            <input onChange={handleEmail} placeholder="Email" className="loginInput" />
            <input onChange={handlePassword} placeholder="Password" className="loginInput" />
            <button onClick={submitLogin} className="loginButton">{loading ? <CircularProgress /> : <p>Login</p>}</button>
            <Link style={{textDecoration: "none", alignItems: "center", justifyContent: "center"}} className="loginRegisterButton" to="/register">
            Create new account

            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
