import './App.css';
import React from 'react';
import axios from 'axios';



export default class App extends React.Component {
  state={
    userListPage: false,
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

  returnToRegister = () => {

    this.setState({
      userListPage: false
    })
  }

  goToUserListPage = () => {
    this.setState({
      userListPage: true
    })
  }


  getUserList = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        { headers: { Authorization: "fillipe-correia-vaughan" } }
      )
      .then((response) => {
        console.log(response.data);
        console.log(this.state.userList);
        this.setState({
          userList: response.data
        });
        // this.setState({
        //   userListPage: true
        // });
        // alert("Usuários carregados com sucesso!");
      })
      .catch((error) => {
        console.log(error.response.data);
        alert("Erro ao carregar a lista de usuários");
      });
  };

  wrapperFunction = () => {
    this.getUserList();
    this.goToUserListPage();
}
  
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
        // this.getUserList();
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

  deleteUser = (id) => {
    var confirmDelete = window.confirm("Deseja realmente deletar o usuário?");
    if (confirmDelete) {
    const axiosConfig = {
      headers: {
        Authorization: "fillipe-correia-vaughan",
      },
    };
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        axiosConfig
      )
      .then((response) => {
        console.log("THEN", response.data);
        alert("Usuário deletado com sucesso!")
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
  };

  render(){
    const userlistList = this.state.userList.map((userlist)=>{
      return(
        <div className='Lista'>
         
          <ul>
            <li>Nome: {userlist.name}</li>
            <li>ID: {userlist.id}</li>
            <li>Deletar: <button onClick={this.deleteUser.bind(this, userlist.id)}>X</button></li>
            
          </ul>
      
        </div>
      )
    }
    )

    const userListWrapper = (
      <div>
      <div>{userlistList}</div>
      <div>
      <button className='button-back' onClick={this.returnToRegister}><span>⬅️</span> Voltar</button>
      </div>
      </div>
    )

    console.log("estado", this.state)

    const cadastro = (
      <div className="App">
        <h1>Cadastro de Usuários</h1>
         <input
         placeholder="Nome do usuário"
         value={this.state.inputValueNome}
         onChange={this.handleInputName}
         />
         
          <input
          placeholder="Email do usuário"
          value={this.state.inputValueEmail}
          onChange={this.handleInputEmail}
          />
          <button onClick={this.createUser}>Criar usuário</button>
          <button onClick={this.wrapperFunction}>Listar usuários</button>
      </div>
    );

    
    return (
      <div className='button-back'>
        
         {this.state.userListPage === true? (userListWrapper): (cadastro) }

      </div>
    );
  }
}