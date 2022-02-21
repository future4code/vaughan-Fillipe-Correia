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
  padding: 20px;
  width: 100%;
  text-align: center;

  a {
    text-decoration: none;
  }
`;

const TripCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
  font-size: 1em;
  color: black;
  border: 1px solid #ddd;
  border-radius: 4px;
  max-width: 300px;
  min-height: 400px;
  /* max-height: 400px; */

  span {
    font-weight: bold;
    color: black;
  }
`;

const CardsGrid = styled.div`
      display: flex;
      flex-direction: row;
      gap: 20px;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      @media (max-width: 600px) {
      flex-direction: column;
      gap: 20px;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
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
          <Button
            variant="outlined"
            style={{
              backgroundColor: "black",
              color: "white",
            }}
          >
            Voltar
          </Button>
        </Link>

        <Link to="/applytotrip">
          <Button
            variant="outlined"
            style={{
              backgroundColor: "black",
              color: "white",
            }}
          >
            Inscrever-se
          </Button>
        </Link>
      </ButtonContainer>

      <CardsGrid>
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
      </CardsGrid>
    </TripsContainer>
  );
};

export default TripList;
