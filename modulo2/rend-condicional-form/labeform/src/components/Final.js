import React from "react";
import styled from "styled-components";

const Container4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 300px;
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

class Final extends React.Component {
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
        <Container4>
            
        <h3>Obrigado por responder!</h3>
        <h4>Suas respostas foram salvas com sucesso!</h4>


      </Container4>
      
    );
  }
}


export default Final;