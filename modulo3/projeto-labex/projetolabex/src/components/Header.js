import styled from 'styled-components';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    margin: 0;
    width: 100%;
    text-align: center;
    font-size: 1.5em;
    color: rgb(63, 81, 181);
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: 'Roboto', sans-serif;
    img{
        width: 50px;
    }
    h1{
        margin-left: 10px;
    }
    span{
        color: rgb(63, 81, 181);
        font-family: 'Verdana', sans-serif;
    }
    a{
        text-decoration: none;
        color: rgb(63, 81, 181)
    }
    `;

const Header = () => {
    return (
        <HeaderContainer>
            <img src={logo} alt="logo" />
            <Link color='rgb(63, 81, 181)' to="/">
        <h1>Labe<span>X</span></h1>
        </Link>
        </HeaderContainer>
    );
};

export default Header;