import React, { Component } from "react";
import styled from "styled-components";
import iconeFacebook from "../../img/facebook.svg";
import iconeInstagram from "../../img/instagram.svg";

const ShareContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px;

  img{
      height: 25px;
  }
`;

export class SecaoShare extends Component {
  state = {
    comentario: "",
  };

  onClickShare = () => {
    console.log("Post compartilhado!");
    };


  render() {
    return (
      <ShareContainer>
        
          <img src={iconeFacebook} alt="icone" onClick={this.onClickShare} />
          <img src={iconeInstagram} alt="icone" onClick={this.onClickShare} />
        
      </ShareContainer>
    );
  }
}