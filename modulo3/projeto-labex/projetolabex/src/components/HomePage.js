import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import Carousel from "../carousel/Carousel";
import Footer from "./Footer";

const HomeContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: black;

  @media (max-width: 600px) {
      h2{
          black;
        }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
  margin-top: 50px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  align-items: center;
  text-align: center;
  border: 1px solid #fff;
  padding: 20px;
  gap: 20px;
  max-width: 300px;

  a {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 600px) {
    border: 1px solid black;
    color: black;
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <Carousel />

      <CardContainer>
        <Card>
          <h3>Seja um(a) astronauta</h3>
          <p>Veja a nossa lista de viagens espaciais e inscreva-se!</p>
          <Button
            style={{
              backgroundColor: "black",
              color: "white",
            }}
            variant="contained"
          >
            <Link to="/triplist">Lista de viagens</Link>
          </Button>
        </Card>

        <h2>OU</h2>

        <Card>
          <h3>Faça o login para a área administrativa</h3>

          <Button
            style={{
              backgroundColor: "black",
              color: "white",
            }}
            variant="contained"
          >
            <Link to="/login">Área administrativa</Link>
          </Button>
        </Card>
      </CardContainer>
      <Footer />
    </HomeContainer>
  );
};

export default HomePage;
