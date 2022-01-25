import React from "react";
import styled from "styled-components";

const Container2 = styled.div`
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

class Etapa2 extends React.Component {
  state = {
    curso: "",

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
        <Container2>
            
        <form onSubmit={this.handleSubmit}>
          <h1>Etapa 2</h1>
          <h2>INFORMAÇÕES DO ENSINO SUPERIOR</h2>
          
          
          <label>
            5. Qual seu curso?:
            <input
              type="text"
              name="nome"
              value={this.state.nome}
              onChange={this.handleChange}
            />
          </label>
          
        
          <label>
            6. Unidade de ensino:
            <input
              type="text"
              name="idade"
              value={this.state.idade}
              onChange={this.handleChange}
            />
          </label> 
        </form>

      </Container2>
      
    );
  }
}


export default Etapa2;