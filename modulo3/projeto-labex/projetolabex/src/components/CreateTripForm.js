import { BrowserRouter, Link, Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { FormControlLabel } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const CardForm = styled.div`
  display: grid;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 3px 5px;
  width: 480px;
  height: 500px;
  align-items: center;
  padding: 50px;
  text-align: center;
  background-color: white;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    padding: 0;
  }
`;

const H2 = styled.h2`
  color: #7c66c5;
`;
const H4 = styled.h4`
  color: #7c66c5;
`;

const InputData = styled.input`
  background-color: white;
  border: 1px solid #c4c4c4;
  border-radius: 3px;
  margin-bottom: 20px;
  color: #7c66c5;
  text-align: center;
  padding: 3px;
`;


const CreateTripForm = () => {
  const [name , setName] = useState("");
  const [planet , setPlanet] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [durationInDays, setDurationInDays] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePlanetChange = (event) => {
    setPlanet(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDurationInDaysChange = (event) => {
    setDurationInDays(event.target.value);
  };

  const submitApplication = (event) => {
    event.preventDefault();
    const headers = {
      "Content-Type": "application/json",
      "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0",
    };
    const application = {
      name,
      planet,
      date,
      description,
      durationInDays,
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:Fillipe/trips`,
        application, { headers }
      )
      .then((response) => {
        console.log(response);
        alert("Inscrição realizada com sucesso!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

    return (
        <div>
      <h1>Create Trip Form</h1>
      <Link to="/createtripform">
        <button>Enviar</button>
      </Link>

      <Link to="/adminpage">
        <button>Voltar</button>
      </Link>

      <CardForm>
      <TextField
          id="outlined-basic"
          label="Nome da viagem"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
        />
        <br />

        <TextField
          id="outlined-basic"
          label="Planeta"
          variant="outlined"
          value={planet}
          onChange={handlePlanetChange}
        />
        <br />

        <TextField
          id="outlined-basic"
          label="Data da viagem"
          variant="outlined"
          value={date}
          onChange={handleDateChange}
        />

        <TextField
          id="outlined-basic"
          label=" Descrição"
          variant="outlined"
          value={description}
          onChange={handleDescriptionChange}
        />

        <TextField
          id="outlined-basic"
          label=" Duração da viagem em dias"
          variant="outlined"
          value={durationInDays}
          onChange={handleDurationInDaysChange}
        />
        <Button onClick={submitApplication} variant="contained" color="primary">
          {" "}
          Criar Viagem
        </Button>

        </CardForm>

      
    </div>
    );
};

export default CreateTripForm;