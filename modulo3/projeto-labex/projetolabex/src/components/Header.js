import styled from 'styled-components';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 20px;
    align-items: center;
    background-color: black;
    margin: 0;
    width: 100%;
    height: 120px;
    text-align: center;
    font-size: 1.5em;
    color: white;
    font-family: 'Roboto', sans-serif;
    img{
        width: 50px;
    }
    h1{
        margin-left: 10px;
    }
    span{
        color: white;
        font-family: 'Verdana', sans-serif;
    }
    a{
        margin-left: -10px;
        margin-top: 10px;
        text-decoration: none;
        color: white;
    }

    @media (max-width: 600px) {
        font-size: 0.8em;
    `;

const Header = () => {
    return (
        <HeaderContainer>
            <img src={logo} alt="logo" />
            <Link color='rgb(63, 81, 181)' to="/">
        <h1>abe<span>X</span></h1>
        </Link>
        </HeaderContainer>
    );
};

export default Header;