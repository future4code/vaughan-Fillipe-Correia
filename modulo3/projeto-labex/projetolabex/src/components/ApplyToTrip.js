import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import { useState, useEffect } from "react";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
`;

const CardForm = styled.div`
  display: grid;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 3px 5px;
  width: 480px;
  height: 700px;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 50px;
  text-align: center;
  background-color: white;
  gap: 10px;

  select {
    padding: 20px;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    width: 80%;
    height: 100%;
    padding: 10px;
  }
`;

const H2 = styled.h2`
  color: black;
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
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:Fillipe/trips/${tripID}/apply`,
        application
      )
      .then((response) => {
        alert("Inscrição realizada com sucesso!");
        window.location.href = "/triplist";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <PageContainer>
      <CardForm>
        <H2> Inscreva-se em uma viagem! </H2>
        {/* select trip */}

        <select onChange={handleTripChange}>
          <option value={""}>Nenhum</option>
          {trips.map((trip) => {
            return (
              <option key={trip.name} value={trip.id}>
                {trip.name}
              </option>
            );
          })}
        </select>

        <TextField
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          value={name}
          onChange={handleNameChange}
        />
        <br />

        <TextField
          id="outlined-basic"
          label="Idade"
          variant="outlined"
          value={age}
          onChange={handleAgeChange}
        />
        <br />

        <TextField
          id="outlined-basic"
          label="Profissão"
          variant="outlined"
          value={profession}
          onChange={handleProfessionChange}
        />

        <TextField
          id="outlined-basic"
          label="Fale sobre o porquê da sua inscrição"
          variant="outlined"
          color="primary"
          value={applicationText}
          onChange={handleApplicationTextChange}
        />

        <TextField
          id="outlined-basic"
          label=" País"
          variant="outlined"
          value={country}
          onChange={handleCountryChange}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              submitApplication();
            }
          }}
        />

        <Link to="/triplist">
          <Button variant="outlined" style={{
              backgroundColor: "black",
              color: "white",
            }}>
            Voltar
          </Button>
        </Link>

        <Button onClick={submitApplication} variant="contained" style={{
              backgroundColor: "black",
              color: "white",
            }}>
          {" "}
          Enviar inscrição
        </Button>
      </CardForm>
    </PageContainer>
  );
};

export default ApplyToTrip;
