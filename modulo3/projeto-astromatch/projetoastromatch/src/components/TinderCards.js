import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import SwipeButtons from "./SwipeButtons";

const TinderCards = () => {
  const [people, setPeople] = useState([]);
  const [ID, setID] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Fillipe/person"
      )
      .then((res) => {
        setPeople([res.data.profile]);
        setID([res.data.profile.id]);
      })
      .catch((err) => {
        console.log("Ocorreu um erro:", err);
      });
  }, []);

  const getPeople = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Fillipe/person"
      )
      .then((res) => {
        setPeople([res.data.profile]);
      })
      .catch((err) => {
        console.log("Ocorreu um erro:", err);
      });
  };

  const onCardLeftScreen = () => {
    getPeople();
  };

  const swipeRight = () => {
    const body = {
      id: ID[0],
      choice: true,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Fillipe/choose-person",
        body
      )
      .then((res) => {
        alert("You liked this person!");
      })
      .catch((err) => {
        console.log("Ocorreu um erro:", err);
      });
      getPeople();
  };

  return (
    <>
    <h3>Swipe left or right to see the people in your area!</h3>
      <div className="tinderCards">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onCardLeftScreen={onCardLeftScreen}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.photo})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
          
        ))}
      </div>
      <SwipeButtons swipeRight={swipeRight} people={people} getPeople={getPeople} />
    </>
  );
};

export default TinderCards;
