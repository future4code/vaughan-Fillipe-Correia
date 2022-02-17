import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";


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

    span{
        font-weight: bold;
        color: black;
    }

  &:hover {
    background-color: grey;
  }

  @media (max-width: 600px) {
    flex-direction: column;

`;

const CandidateCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: space-between;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    align-items: center;
    padding: 20px;
    text-align: center;

    span{
        font-weight: bold;
        color: black;
    }

  &:hover {
    background-color: grey;
  }

  @media (max-width: 600px) {
    flex-direction: column;

`;

const TripDetail = (props) => {
  const [trip, setTrip] = useState([]);
  const [candidates, setCandidates] = useState([]);
  

  useEffect(() => {
    const token = localStorage.getItem("token");


    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/:Fillipe/trip/id/${props.tripId}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        setTrip([response.data.trip]);
        setCandidates(response.data.trip.candidates);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <CandidateCard>
      <h1>Detalhes da viagem</h1>
      <Link to="/adminpage">
        <button>Voltar</button>
      </Link>
      <Link to="/login">
        <button>Log out</button>
      </Link>
      <div>
        {trip.map((trip) => (
          <TripCard key={trip.id}>
            <h1>{trip.name}</h1>
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

            
            {candidates.map((candidate) => (
              <CandidateCard key={trip.id}>
              <h1>Candidatos</h1>
                <p><span>Nome: </span>{candidate.name}</p>
                <p><span>Idade: </span>{candidate.age} anos</p>
                <p><span>Profissão: </span>{candidate.profession}</p>
                <p><span>Texto de inscrição: </span>{candidate.applicationText}</p>
              </CandidateCard>
            ))}
          </TripCard>
        ))}
      </div>
    </CandidateCard>
  );
};

export default TripDetail;


/* <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Detalhes</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <h4>{trip.name}</h4>
                  <p>{trip.planet}</p>
                  <p>{trip.date}</p>
                  <p>{trip.description}</p> 
                </Typography>
              </AccordionDetails>
            </Accordion> */
