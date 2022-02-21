import { Link, useNavigate, useParams } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { useState, useEffect } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { makeStyles } from "@material-ui/core/styles";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  padding: 20px;
  margin: 20px;
`;

const TripCard = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  gap: 10px;
  justify-content: space-between;
  border-radius: 10px;
  color: black;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  align-items: center;
  padding: 20px;
  text-align: center;

  &:hover {
    background-color: #f5f5f5;
  }

  h4 {
    max-width: 100px;

`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 1.2em;
  color: black;
  margin-top: 20px;
  margin-bottom: 20px;

  @media (max-width: 600px) {
    font-size: 0.8em;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  gap: 20px;
`;

const AdminPage = () => {
  const pathParams = useParams();
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [tripDetail, setTripDetail] = useState([]);
  const [tripId, setTripId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
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

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <PageContainer>
      <Title>
        <h1>Painel administrativo</h1>
      </Title>

      <ButtonContainer>
        <Link to="/">
          <Button
            variant="contained"
            style={{
              backgroundColor: "black",
              color: "white",
            }}
          >
            Inicio
          </Button>
        </Link>

        <Link to="/createtripform">
          <Button
            variant="contained"
            style={{
              backgroundColor: "black",
              color: "white",
            }}
          >
            Criar viagem
          </Button>
        </Link>

        <Button
          onClick={logOut}
          variant="contained"
          style={{
            backgroundColor: "black",
            color: "white",
          }}
        >
          Log out
        </Button>
      </ButtonContainer>

      {trips.map((trip) => {
        const tripId = trip.id;
        return (
          <TripCard key={trip.id}>
            <h4>{trip.name}</h4>

            <Link to={`/tripdetail/${trip.id}`}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                Detalhes
              </Button>
            </Link>

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
          </TripCard>
        );
      })}
    </PageContainer>
  );
};

export default AdminPage;
