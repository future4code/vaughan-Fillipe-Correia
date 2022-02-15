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

const ApplyToTrip = () => {
  const [trips, setTrips] = useState([]);
  const [tripID, setTripID] = useState("");
  const [trip, setTrip] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [applicationText, setApplicationText] = useState("");
  const [profession, setProfession] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/:Fillipe/trips"
      )
      .then((response) => {
        setTrips(response.data.trips);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleTripChange = (event) => {
    setTrip(event.target.value);
    // set the tripID to the trip selected
    setTripID(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleApplicationTextChange = (event) => {
    setApplicationText(event.target.value);
  };

  const handleProfessionChange = (event) => {
    setProfession(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const submitApplication = (event) => {
    event.preventDefault();
    const application = {
      name,
      age,
      applicationText,
      profession,
      country,
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:Fillipe/trips/:${tripID}/apply`,
        application
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
      <CardForm>
        <H2> Inscreva-se em uma viagem! </H2>
        {/* select trip */}

        <select onChange={handleTripChange}>
          <option value={""}>Nenhum</option>

          {trips.map((trip) => {
            return (
              <option key={trip.name} value={trip.name}>
                {trip.name}
              </option>
            );
          })}
        </select>

        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
        />
        <br />

        <TextField
          id="outlined-basic"
          label="Age"
          variant="outlined"
          value={age}
          onChange={handleAgeChange}
        />
        <br />

        <TextField
          id="outlined-basic"
          label="Profession"
          variant="outlined"
          value={profession}
          onChange={handleProfessionChange}
        />

        <TextField
          id="outlined-basic"
          label=" Texto de inscrição"
          variant="outlined"
          value={applicationText}
          onChange={handleApplicationTextChange}
        />

        <TextField
          id="outlined-basic"
          label=" País"
          variant="outlined"
          value={country}
          onChange={handleCountryChange}
        />

        <Link to="/triplist">
          <button>Voltar</button>
        </Link>

        <Button onClick={submitApplication} variant="contained" color="primary">
          {" "}
          Enviar inscrição
        </Button>
      </CardForm>
    </div>
  );
};

export default ApplyToTrip;
