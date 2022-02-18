import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { useState } from "react";

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

const Title = styled.h1`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-size: 1.5em;
  color: rgb(63, 81, 181);
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  gap: 20px;
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
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:Fillipe/login",
        {
          email: email,
          password: password,
        }
      )
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
      <Title>
        <h1>Login</h1>
      </Title>
      <ButtonContainer>
        <Link to="/">
          <Button variant="contained" color="primary">
            Voltar
          </Button>
        </Link>
      </ButtonContainer>
      <CardForm>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              login();
            }
          }}
        />
        <br />

        <TextField
          id="outlined-basic"
          label="Senha"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              login();
            }
          }}
        />
        <br />

        <Button onClick={login} variant="contained" color="primary">
          {" "}
          Fazer login
        </Button>
      </CardForm>

      <br />
    </div>
  );
};

export default LoginPage;
