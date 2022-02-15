import { BrowserRouter, Link, Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { FormControlLabel } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { useState, useEffect } from "react";
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const TripCard = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  justify-content: space-between;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    align-items: center;
    padding: 20px;
    text-align: center;

  &:hover {
    background-color: grey;
  }

`;

const AdminPage = () => {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
      getTrips();
  }, []);

  const getTrips = () => {
      axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:Fillipe/trips")
          .then(response => {
              setTrips(response.data.trips);
          })
          .catch(error => {
              console.log(error);
          });
  };

  return (
    <div className="adminpage">
      <h1>Admin Page</h1>
      <Link to="/">
        <button>Voltar</button>
      </Link>
      <Link to="/createtripform">
        <button>Criar viagem</button>
      </Link>
      <Link to="/login">
        <button>Log out</button>
      </Link>

      <Link to="/tripdetail">
        {trips.map(trip => {
          return (
            <TripCard key={trip.id}>
              <h4>{trip.name}</h4>
              <IconButton>
            <DeleteForeverIcon fontSize="large" />
            </IconButton>
            </TripCard>
          );
        }
        )}
      </Link>
    </div>
  );
};

export default AdminPage;
