import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 20px;
`;

const TripsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 100%;
  /* max-width: 800px; */
  /* background-color: #f5f5f5; */
  text-align: center;
`;

const TripCard = styled.div`
  margin-top: 20px;
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
  font-size: 1em;
  color: CornflowerBlue;
  border: 1px solid #ddd;
  border-radius: 4px;
  max-width: 80%;

  span {
    font-weight: bold;
    color: black;
  }
`;

const TripList = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
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
  };

  return (
    <TripsContainer>
        <ButtonContainer>
        <Link to="/">
        <Button variant="outlined" color="primary">
          Voltar
        </Button>
      </Link>

      <Link to="/applytotrip">
        <Button variant="outlined" color="primary">
          Inscrever-se
        </Button>
        </Link>
        </ButtonContainer>
      {trips.map((trip) => {
        return (
          <TripCard key={trip.id}>
            <h2>{trip.name}</h2>
            <p>
              <span>Planeta: </span>
              {trip.planet}
            </p>
            <p>
              <span>Descrição: </span>
              {trip.description}
            </p>
            <p>
              <span>Data: </span>
              {trip.date}
            </p>
            <p>
              <span>Duração: </span>
              {trip.durationInDays} dias
            </p>
          </TripCard>
        );
      })}

        
    </TripsContainer>
  );
};

export default TripList;
