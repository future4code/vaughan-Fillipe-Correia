import { BrowserRouter, Link, Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useState, useEffect, setItem } from "react";

const CardForm = styled.div`
    display: grid;
    border: none;
    border-radius: 10px;
    box-shadow: 5px 3px 5px;
    height: 300px;
    align-items: center;
    padding: 50px;
    text-align: center;
`;

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const login = () => {
        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:Fillipe/login", {
                email: email,
                password: password,
            })
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                window.location.href = "/adminpage";
            })
            .catch((error) => {
                alert("Usuário ou senha incorretos");
            });
    };

    return (
        <div className="loginpage">
            <h1>Login</h1>
            <CardForm>
        

        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
        />
        <br />

        <TextField
          id="outlined-basic"
          label="password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />


        <Button onClick={login} variant="contained" color="primary">
          {" "}
          Fazer login
        </Button>
      </CardForm>

                <br />
                <Link to="/">
                <button>Voltar</button>
                </Link>
                
            
        </div>
    );
};

export default LoginPage;