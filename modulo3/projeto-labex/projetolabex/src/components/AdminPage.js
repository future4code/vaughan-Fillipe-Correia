import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TripDetail from "./TripDetail";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

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
  const [candidates, setCandidates] = useState([]);
  const [tripDetail, setTripDetail] = useState([]);
  const [tripId, setTripId] = useState("");
  const classes = useStyles();


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

  const saveId = (id) => {
    localStorage.setItem("tripId", id);
  };


  const getTripDetails = (tripId) => {
    const token = localStorage.getItem("token");
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:Fillipe/trip/${tripId}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
  
      })
      .catch((error) => {
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

      {trips.map((trip) => {
        const tripId = trip.id;
        return (
          <TripCard key={trip.id}>
            <h4>{trip.name}</h4>

{/* FUNÇÃO DE PEGAR OS DETALHES */}
            <Button onClick={() => {
                const token = localStorage.getItem("token");
                axios
                  .get(
                    `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:Fillipe/trip/${trip.id}`,
                    {
                      headers: {
                        "Content-Type": "application/json",
                        auth: token,
                      },
                    }
                  )
                  .then((response) => {
                    console.log(response.data);
                    setTripDetail([response.data.trip]);
                    setCandidates(response.data.trip.candidates);
                    setTripId(trip.id);
                    console.log(tripId)
                  })
                  .catch((error) => {
                    console.log(error);
                  });
                  {}

                  
              }}> Detalhes
              {/* <Link to="/tripdetail">
                Detalhes
              </Link> */}
            </Button>


            {/* ============================================================ */}
            <IconButton
              onClick={() => {
                const token = localStorage.getItem("token");
                axios
                  .delete(
                    `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:Fillipe/trips/${trip.id}`,
                    {
                      headers: {
                        "Content-Type": "application/json",
                        auth: token,
                      },
                    }
                  )
                  .then((response) => {
                    alert("Viagem deletada com sucesso!");
                    getTrips();
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              <DeleteForeverIcon />
            </IconButton>

            {/* ============================================================ */}
            
          </TripCard>
        );
      })}
    </div>
  );
};

export default AdminPage;
