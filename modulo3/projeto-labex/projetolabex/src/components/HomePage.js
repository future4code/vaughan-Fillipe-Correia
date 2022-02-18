import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const HomeContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  margin-top: 20px;
  width: 100%;
  color: #fff;
  background-image: url("https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
  background-size: 100%;
  background-repeat: no-repeat;

  @media (max-width: 600px) {
      h2{
          color: rgb(63, 81, 181);
        }
`;

const WelcomeMessage = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-left: 100px;
  @media (max-width: 600px) {
      font-size: 20px;
      align-items: center;
    margin-top: 20px;
    margin-left: 50px;
    
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
  margin-top: 100px;
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
  max-width: 300px;

  a {
    text-decoration: none;
    color: rgb(63, 81, 181);
  }

  @media (max-width: 600px) {
    border: 1px solid black;
    color: rgb(63, 81, 181);
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <WelcomeMessage>
        <h1>Bem vindo(a) ao LabeX</h1>
        <p>Sua plataforma de viagens espaciais</p>
      </WelcomeMessage>
      <CardContainer>
        <Card>
          <h3>Seja um(a) astronauta</h3>
          <p>Veja a nossa lista de viagens espaciais e inscreva-se!</p>
          <Button variant="contained" color="default">
            <Link to="/triplist">Lista de viagens</Link>
          </Button>
        </Card>

        <h2>OU</h2>

        <Card>
          <h3>Faça o login para a área administrativa</h3>

          <Button variant="contained" color="default">
            <Link to="/login">Área administrativa</Link>
          </Button>
        </Card>
      </CardContainer>
    </HomeContainer>
  );
};

export default HomePage;
