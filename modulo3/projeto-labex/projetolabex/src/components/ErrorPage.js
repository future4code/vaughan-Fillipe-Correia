import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    img{
        width: 300px;
        height: 300px;

    }

    `;

const ErrorPage = () => {
    return (
        <ErrorContainer>
        <h1>Error 404</h1>
        <img src="https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt=""/>
        <p>Ocorreu um problema na repimboca da parafuseta, favor voltar para a página inicial</p>
        <Link to="/">Página Inicial</Link>
        </ErrorContainer>
    );
    };

export default ErrorPage;