import styled from 'styled-components';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import IconButton from "@material-ui/core/IconButton";


const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    align-items: center;
    background-color: black;
    margin: 0;
    width: 100%;
    text-align: center;
    color: white;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: 'Roboto', sans-serif;
    span{
        color: white;
        font-family: 'Verdana', sans-serif;
    }

    @media (max-width: 600px) {
        font-size: 0.8em;
    `;

const Footer = () => {
    return (
        <FooterContainer>
        <h2>Nos siga nas redes sociais:</h2>
        <IconButton aria-label="facebook">
            <FacebookIcon />
        </IconButton>
        <IconButton aria-label="instagram">
            <InstagramIcon />
        </IconButton>
            
        </FooterContainer>
    );
};

export default Footer;