import logo from "./logo.svg";
// import './App.css';
import React from "react";
import styled from "styled-components";
import ChatBubble from "./components/ChatBubble/ChatBubble";
import roboto from "./img/roboto.jpg";

const Container = styled.div`
  display: flex;
  background-image: url(${roboto});
  background-size: cover;
  /* height: 100%; */
  min-height: 800px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #000;
  padding: 10px;
  margin-bottom: 10px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  height: 100px;
  gap: 10px;
`;

const Tittle = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: #000;
  margin-bottom: -50px;

  span {
    color: white;
  }

`;

class App extends React.Component {
  state = {
    mensagens: [
      {
        nome: "Bot",
        mensagem:
          "Olá, eu sou o Botson, o seu bot de exemplo do chat! Digite algo, vamos conversar! Mas se eu não responder, é porque o meu criador ainda está aprendendo a programar. Se quiser saber mais sobre o meu criador, acesse: FillipeCO no github!",
      },
    ],
    valorInputNome: "",
    valorInputMensagem: "",
  };

  enviarMensagem = () => {
    const novaMensagem = {
      nome: this.state.valorInputNome,
      mensagem: this.state.valorInputMensagem,
    };
    const novasMensagens = [...this.state.mensagens, novaMensagem];
    this.setState({
      mensagens: novasMensagens,
      valorInputNome: "",
      valorInputMensagem: "",
    });
  };

  onChangeInputNome = (event) => {
    this.setState({
      valorInputNome: event.target.value,
    });
  };

  onChangeInputMensagem = (event) => {
    this.setState({
      valorInputMensagem: event.target.value,
    });
  };

  deleteMessage = (index) => {
    const novasMensagens = [...this.state.mensagens];
    novasMensagens.splice(index, 1);
    this.setState({
      mensagens: novasMensagens,
    });
  };

  render() {
    const listaDeMensagens = this.state.mensagens.map((mensagem, index) => {
      return (
        <ChatBubble
          nome={mensagem.nome}
          mensagem={mensagem.mensagem}
          key={index}
          dblclick={() => this.deleteMessage(index)}
        />
      );
    });

    return (
      <Container>
        <Tittle>
        <h1>Whats<span>lab</span></h1>
        </Tittle>
        <FormContainer>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Digite seu nome"
                value={this.state.valorInputNome}
                onChange={this.onChangeInputNome}

              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Digite sua mensagem"
                value={this.state.valorInputMensagem}
                onChange={this.onChangeInputMensagem}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    this.enviarMensagem();
                  }
                }}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.enviarMensagem}
            >
              Enviar
            </button>
            </FormContainer>

        <div className="chat">
          {this.state.mensagens.map((mensagem, index) => {
            return (
              <ChatBubble
                key={index}
                nome={mensagem.nome}
                mensagem={mensagem.mensagem}
                onClick={() => this.deleteMessage(index)}
                onDoubleClick={() => this.deleteMessage(index)}
              />
            );
          })}
        </div>

        
      </Container>
    );
  }
}

export default App;
