import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";
import SwipeButtons from './SwipeButtons';



const TinderCards = () => {
    const [people, setPeople] = useState([]);
    const [ID , setID] = useState("");

   

useEffect(() => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Fillipe/person')
    .then(res => {
        setPeople([res.data.profile]);
    })
    .catch(err => {
        console.log("Ocorreu um erro:", err);
    })
    getId();
    
}, [])

const getId = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Fillipe/person')
    .then(res => {
        setID([res.data.profile.id]);
    })
    .catch(err => {
        console.log("Ocorreu um erro:", err);
    })
};

const getPeople = () => {
    axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Fillipe/person')
    .then(res => {
        setPeople([res.data.profile]);
    })
    .catch(err => {
        console.log("Ocorreu um erro:", err);
    })
};

const onCardLeftScreen = () => {
    getPeople();

    console.log("You swiped to the next person!");
};

const swipeRight = () => {
    console.log(people)
    const body = {
        id: ID[0],
        choice: true
    }
    axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Fillipe/choose-person', body)
    .then(res => {
        alert("You liked this person!");
    })
    .catch(err => {
        console.log("Ocorreu um erro:", err);
    })
};

// access the id of the person you liked


    return (
        // print the id of the person you liked
        console.log(ID[0]),
        <>
        <div className="tinderCards">
            {people.map((person) => (
                <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']} onCardLeftScreen={onCardLeftScreen}>
                    <div className="card" style={{ backgroundImage: `url(${person.photo})`}}>
                        <h3>{person.name}</h3>
                        </div>
                </TinderCard>
                
            ))}
            </div>
            <SwipeButtons swipeRight={swipeRight} people={people} />
            </>
            
        
    )
}

export default TinderCards;