import React from "react";
import styled from "styled-components";

const Container3 = styled.div`
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
    width: 100%;
  }
`;

class Etapa3 extends React.Component {
  state = {
    cursoComplementar: "",

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

  render() {
    

    return (
        <Container3>
            
        <form onSubmit={this.handleSubmit}>
          <h1>Etapa 3</h1>
          <h2>INFORMAÇÕES GERAIS DE ENSINO </h2>
          
          
          <label>
            5. Por que você não terminou um curso de graduação?:
            <input
              type="text"
              name="nome"
              value={this.state.nome}
              onChange={this.handleChange}
            />
          </label>
          
        
          <label>
            6. Você fez algum curso complementar?:
            <select name="cursoComplementar" value={this.state.cursoComplementar} onChange={this.handleChange}>
                <option value="">Cursos técnicos</option>
                <option value="">Cursos de inglês</option>
                <option value="">Não fiz curso complementar</option>
            </select>
          </label> 
        </form>

      </Container3>
      
    );
  }
}


export default Etapa3;