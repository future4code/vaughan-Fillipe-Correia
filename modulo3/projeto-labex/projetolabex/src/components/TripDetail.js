import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: rgb(63, 81, 181);

  font-family: "Roboto", sans-serif;
`;

const TripCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: space-between;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    align-items: center;
    padding: 20px;
    text-align: center;
    color: rgb(63, 81, 181);
    background-color: #f5f5f5;
    
    span{
        font-weight: bold;
        color: rgb(63, 81, 181);
    }
    @media (max-width: 600px) {
    flex-direction: column;
`;



const CandidateCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  color: white;
  max-width: 300px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    align-items: center;
    padding: 20px;
    text-align: center;
    background-image: url(https://images.unsplash.com/photo-1520034475321-cbe63696469a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
    span{
        font-weight: bold;
        color: rgb(63, 81, 181);
    }
    img{
      height: 200px;
    }
    @media (max-width: 600px) {
    flex-direction: column;
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

const TripDetail = () => {
  const pathParams = useParams();
  const navigate = useNavigate();
  const [trip, setTrip] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const [aprovedCandidates, setAprovedCandidates] = useState([]);
  const { id } = useParams();
  const classes = useStyles();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    getTripDetails();
  }, []);

  const getTripDetails = () => {
    const token = localStorage.getItem("token");

    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:Fillipe/trip/${id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        setTrip([response.data.trip]);
        setCandidates(response.data.trip.candidates);
        setAprovedCandidates(response.data.trip.approved);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <DetailContainer>
      <h1>Detalhes da viagem</h1>
      <ButtonContainer>
        <Link to="/adminpage">
          <Button variant="contained" color="primary">
            Voltar
          </Button>
        </Link>

        <Link to="/adminpage">
          <Button variant="contained" color="primary">
            Voltar
          </Button>
        </Link>
      </ButtonContainer>
      <div>
        {trip.map((trip) => (
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

            <h2>Candidatos para aprovação</h2>

            <CardsGrid>
              {candidates.map((candidate) => (
                <CandidateCard key={candidate.name}>
                  <h3>
                    <span>Nome: </span>
                    {candidate.name}
                  </h3>
                  <img src="https://cdn0.iconfinder.com/data/icons/streamline-emoji-1/48/178-man-astronaut-2-256.png" />
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography className={classes.heading}>
                        Detalhes
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography component={"span"} variant={"body2"}>
                        <p>Nome: {candidate.name}</p>
                        <p>Idade: {candidate.age}</p>
                        <p>Profissão: {candidate.profession}</p>
                        <p>Texto de inscrição: {candidate.applicationText}</p>
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <p></p>

                  <Button
                    variant="contained"
                    color="default"
                    onClick={() => {
                      const token = localStorage.getItem("token");
                      const body = {
                        approve: true,
                      };
                      axios
                        .put(
                          `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:Fillipe/trips/${id}/candidates/${candidate.id}/decide`,
                          body,
                          {
                            headers: {
                              auth: token,
                            },
                          }
                        )
                        .then((response) => {
                          alert("Candidato aprovado com sucesso!");
                          getTripDetails();
                        })
                        .catch((error) => {
                          console.log(error);
                        });
                      {
                      }
                    }}
                  >
                    Aprovar
                  </Button>
                </CandidateCard>
              ))}
            </CardsGrid>

            <h2>Candidatos aprovados</h2>
            <CardsGrid>
              {aprovedCandidates.map((approvedcandidate) => (
                <CandidateCard key={approvedcandidate.name}>
                  <h3>{approvedcandidate.name}</h3>
                  <img
                    src="https://cdn0.iconfinder.com/data/icons/streamline-emoji-1/48/182-astronaut-2-256.png"
                    alt="helmet"
                  />
                  <div>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          Detalhes
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography component={"span"} variant={"body2"}>
                          <p>Nome: {approvedcandidate.name}</p>
                          <p>Idade: {approvedcandidate.age}</p>
                          <p>Profissão: {approvedcandidate.profession}</p>
                          <p>
                            Texto de inscrição:{" "}
                            {approvedcandidate.applicationText}
                          </p>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  </div>
                </CandidateCard>
              ))}
            </CardsGrid>
          </TripCard>
        ))}
      </div>
    </DetailContainer>
  );
};

export default TripDetail;
