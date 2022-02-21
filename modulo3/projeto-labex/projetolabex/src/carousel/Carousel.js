import React, { useState } from "react";
// import "./Carousel.css";
import styled from "styled-components";
import { images } from "./images";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const CarouselContainer = styled.div`
  width: 100%;
  height: 750px;
  background-color: black;

  h1 {
    font-size: 2rem;
  }

  p {
    margin-top: -400px;
    font-size: 1rem;
  }

  h1,
  p {
    text-align: center;
    background-color: rgb(255, 255, 255, 0.5);
    padding: 20px;
    border-radius: 9px;
  }
`;

const CarouselInner = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
`;

const Left = styled.div`
  flex: 5%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
  color: white;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 5%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
  color: white;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 80%;
  height: 100%;
  display: grid;
  place-items: center;
  font-family: Arial, Helvetica, sans-serif;
  text-align: justify;
  text-align-last: center;
`;

function Carousel() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <CarouselContainer>
      <CarouselInner
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <Left
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosIcon style={{ fontSize: 30 }} />
        </Left>
        <Center>
          <h1>{images[currImg].title}</h1>
          <p>{images[currImg].subtitle}</p>
        </Center>
        <Right
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon style={{ fontSize: 30 }} />
        </Right>
      </CarouselInner>
    </CarouselContainer>
  );
}

export default Carousel;
