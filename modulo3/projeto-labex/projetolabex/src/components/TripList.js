import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import styled from 'styled-components';

const TripsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 100%;
    /* max-width: 800px; */
    background-color: #f5f5f5;
    text-align: center;
`;

const TripCard = styled.div`
    margin-top: 20px;
    background-color: #f5f5f5;
    padding: 20px;
    text-align: center;
    font-size: 1em;
    color: palevioletred;
    border: 1px solid #ddd;
    border-radius: 4px;
    max-width: 80%;

    span{
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
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:Fillipe/trips")
            .then(response => {
                setTrips(response.data.trips);
            })
            .catch(error => {
                console.log(error);
            });
    };




    return (
        <TripsContainer>
            {trips.map(trip => {
                return (
                    <TripCard key={trip.id}>
                        <h1>{trip.name}</h1>
                        <p><span>Planeta: </span>{trip.planet}</p>
                        <p><span>Descrição: </span>{trip.description}</p>
                        <p><span>Data: </span>{trip.date}</p>
                        <p><span>Duração: </span>{trip.durationInDays} dias</p>
                    </TripCard>
                );
            })}

        <h1>Trip List</h1>
        <Link to="/">
            <button>Voltar</button>
            </Link>
            
            <Link to="/applytotrip">
            <button>Inscrever-se</button>
            </Link>
        
        </TripsContainer>
    );
    };

    export default TripList;