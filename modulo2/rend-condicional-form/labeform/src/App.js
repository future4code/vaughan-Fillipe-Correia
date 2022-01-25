import logo from './logo.svg';
// import './App.css';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import styled from 'styled-components';
import React from 'react';


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  gap: 10px;
`;



class App extends React.Component {
  state = {
    etapa: 1,
  }

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
    return (
      <AppContainer>
        {this.renderStep()}
        <button onClick={() => this.setState({ etapa: this.state.etapa + 1 })}>Próxima Etapa</button>
      </AppContainer>
    );
  }
}

export default App;
