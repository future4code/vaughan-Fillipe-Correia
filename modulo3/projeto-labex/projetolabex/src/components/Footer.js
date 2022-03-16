import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import IconButton from "@material-ui/core/IconButton";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Twitter from "@material-ui/icons/Twitter";

const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 20px;
    align-items: center;
    background-color: black;
    margin: 0;
    width: 100%;
    color: white;
    font-family: 'Roboto', sans-serif;
    span{
        color: white;
        font-family: 'Verdana', sans-serif;
    }

    @media (max-width: 600px) {
        font-size: 0.8em;
    `;

    const SocialMediaContainer = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: row;
        `;


const Footer = () => {
  return (
    <FooterContainer>
      <h3>Nos siga nas redes sociais:</h3>

      <SocialMediaContainer>

      <IconButton aria-label="facebook" onClick={() => window.open('https://www.facebook.com')}>
        <FacebookIcon /> 
      </IconButton>

      <IconButton aria-label="instagram" onClick={() => window.open('https://www.instagram.com')}>
        <InstagramIcon /> 
      </IconButton>

      <IconButton aria-label="youtube" onClick={() => window.open('https://www.youtube.com.com')}>
        <YouTubeIcon /> 
      </IconButton>

      <IconButton aria-label="twitter" onClick={() => window.open('https://www.twitter.com')}>
        <Twitter /> 
      </IconButton>

      </SocialMediaContainer>
    </FooterContainer>
  );
};

export default Footer;
