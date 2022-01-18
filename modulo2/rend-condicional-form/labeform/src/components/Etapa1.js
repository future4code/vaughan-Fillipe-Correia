import React from "react";
import styled from "styled-components";
import Etapa2 from "./Etapa2";
import Etapa3 from "./Etapa3";
import Final from "./Final";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100%;
  background-color: orange;
  gap: 10px;
  border-radius: 10px;
  padding-bottom: 50px;

  form{
      display: flex;
      flex-direction: column;
      gap: 10px;
  }

  input{
        width: 80%;
  }

  select{
    width: 82%;
  }
`;

class Etapa1 extends React.Component {
  state = {
    nome: "",
    idade: "",
    email: "",
    escolaridade: "Ensino médio incompleto",
    etapa: 1,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.nextStep();
  };

  renderStep() {
    switch (this.state.etapa) {
      case 1: 
        return <Etapa1 />
        
      case 2:
        
        return <Etapa2 />

      case 3:
        return <Etapa3 />
      case 4:
        return <Final />
      default:
        return <Etapa1 />
    }
  }

  render() {
    let escolaridade;

    switch (this.state.escolaridade) {
      case "Ensino médio incompleto":
        escolaridade = "Ensino médio incompleto";
        break;
      case "Ensino médio completo":
        escolaridade = "Ensino médio completo";
        break;
      case "Ensino superior incompleto":
        escolaridade = "Ensino superior incompleto";
        break;
      case "Ensino superior completo":
        escolaridade = "Ensino superior completo";
        break;
    }

    return (
        <Container>
            
        <form onSubmit={this.handleSubmit}>
          <h1>Etapa 1</h1>
          <h2>DADOS GERAIS</h2>
          
          
          <label>
            1. Qual seu nome?:
            <input
              type="text"
              name="nome"
              value={this.state.nome}
              onChange={this.handleChange}
            />
          </label>
          
        
          <label>
            2. Qual é a sua idade?:
            <input
              type="number"
              name="idade"
              value={this.state.idade}
              onChange={this.handleChange}
            />
          </label>
          
    
          <label>
            3. Qual seu email?:
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          
        <label>
            4. Qual a sua escolaridade?:
          <select
            name="escolaridade"
            value={this.state.escolaridade}
            onChange={this.handleChange}
          > 
            <option value="Ensino médio incompleto">
              Ensino médio incompleto
            </option>
            <option value="Ensino médio completo">Ensino médio completo</option>
            <option value="Ensino superior incompleto">
              Ensino superior incompleto
            </option>
            <option value="Ensino superior completo">
              Ensino superior completo
            </option>
          </select>
          </label>
          
          
        </form>


      </Container>
      
    );
  }
}

export default Etapa1;
