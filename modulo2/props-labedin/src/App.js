import React from "react";
// import './App.css';
import CardGrande from "./components/CardGrande/CardGrande";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import Hobby from "./components/Hobby/Hobby";

import { SectionContainer } from "./styles";
import { Body } from "./styles";

function App() {
  return (
    <Body>
      <SectionContainer>
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png"
          nome="Fillipe"
          descricao="Olá, meu nome é Fillipe Dias Correia, sou aluno da Labenu no curso de Web Fullstack, participo da turma Vaughan e esse é o meu exercício sobre props no react. Também estou cursando Sistemas para internet no Senac e sou formado em Direito com especialização em Direito Digital."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-256.png"
          nome="Email:"
          texto="flip_dias@hotmail.com"
        />

        <CardPequeno
          imagem="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_pin-256.png"
          nome="Endereço:"
          texto="Avenida Vouser Dev, nº 1, Caruaru - PE"
        />
      </SectionContainer>

      <SectionContainer>
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />

        <CardGrande
          imagem="https://e7.pngegg.com/pngimages/830/737/png-clipart-logo-space-race-nasa-insignia-united-states-nasa-miscellaneous-logo.png"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </SectionContainer>

      <SectionContainer>
        <h2>Hobby</h2>
        <Hobby
          imagem="https://cdn0.iconfinder.com/data/icons/work-from-home-17/512/Hobbies-hobby-activity-freetime-lifestyle-256.png"
          nome="Hobby:"
          descricao="Programar é o meu hobby!"
        />
      </SectionContainer>

      <SectionContainer>
        <h2>Minhas redes sociais</h2>

        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </SectionContainer>
    </Body>
  );
}

export default App;
