import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";
import SwipeButtons from './SwipeButtons';


const TinderCards = () => {
    const [people, setPeople] = useState([]);

// get people using axios 
useEffect(() => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Fillipe/person')
    .then(res => {
        setPeople([res.data.profile]);
        console.log(res.data.profile);
        console.log(people);
    })
    .catch(err => {
        console.log("Ocorreu um erro:", err);
    })
}, [])

const getPeople = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Fillipe/person')
    .then(res => {
        setPeople([res.data.profile]);
        console.log(res.data.profile);
        console.log(people);
    })
    .catch(err => {
        console.log("Ocorreu um erro:", err);
    })
};

const onCardLeftScreen = () => {
    getPeople();

    console.log("You swiped!");
};

const cleanMatches = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Fillipe/clear')
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log("Ocorreu um erro:", err);
    })
};



    return (
        console.log(people),
        <div className="tinderCards">
            {/* <h1>Tinder cards</h1> */}
            {people.map((person) => (
                <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']} onCardLeftScreen={onCardLeftScreen}>
                    <div className="card" style={{ backgroundImage: `url(${person.photo})`}}>
                        <h3>{person.name}</h3>
                        </div>
                </TinderCard>
                
            ))}
            

            </div>
    )
}

export default TinderCards;