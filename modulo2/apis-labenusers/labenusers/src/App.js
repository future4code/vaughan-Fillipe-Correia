import './App.css';
import React from 'react';
import axios from 'axios';


export default class App extends React.Component {
  state={
    userList:[],
    inputValueName:"",
    inputValueEmail:""
  }


  componentDidMount = () => {
    this.getUserList();
  }

  handleInputName = (event) => {
    this.setState({
      inputValueName:event.target.value
    })
  }

  handleInputEmail = (event) => {
    this.setState({
      inputValueEmail:event.target.value
    })
  }


  getUserList = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        { headers: { Authorization: "fillipe-correia-vaughan" } }
      )
      .then((response) => {
        console.log("THEN", response.data.result.list);
      })
      .catch((error) => {
        alert("Erro ao carregar a lista de usuários");
      });
  };
  
  createUser = () => {
    const body = {
      name: this.state.inputValueName,
      email: this.state.inputValueEmail
    };
    const axiosConfig = {
      headers: {
        Authorization: "fillipe-correia-vaughan",
      },
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body, axiosConfig
      )
      .then((response) => {
        console.log("THEN", response.data);
        alert("Usuário criado com sucesso!")
        this.setState({inputValueName:""})
        this.setState({inputValueEmail:""})
        this.getUserList();
      })
      .catch((error) => {
        if (
          error.response.data ===
          'Verifique se você está passando o header "Authorization"'
        ) {
          alert("Desculpe, temos um erro interno, tente acessar o app mais tarde.")
        }
      });
  };

  render(){
    const userlistList= this.state.userList.map((userlist)=>{
      return(
        <div>
         
          <p>{userlist.name}</p>
        </div>
      )
    })
    console.log("estado", this.state)
    return (
      <div className="App">
         <input
         placeholder="Nome do usuário"
         value={this.state.inputValueNome}
         onChange={this.handleInputNome}
         />
         
          <input
          placeholder="Email do usuário"
          value={this.state.inputValueEmail}
          onChange={this.handleInputEmail}
          />
          <button onClick={this.createUser}>Criar usuário</button>
      {this.state.userList.length>0? (userlistList): <p>Cadastro de usuários</p>}
      </div>
    );
  }
}