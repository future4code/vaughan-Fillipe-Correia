import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        nomeUsuario: "paulinha",
        fotoUsuario:
          "https://images.generated.photos/_eLx0hk7J_yH3i6QMV8K6iC6o1AmWFK2Zj86XwSf7H0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvYjEwZDlk/ODctMTMwOS00Zjdl/LWE3MWYtOThmNTI1/Yzk4ODk5LmpwZw.jpg",
        fotoPost: "https://picsum.photos/200/150",
        comentario: "Foto 1",
      },
      {
        id: 2,
        nomeUsuario: "Fillipe",
        fotoUsuario:
          "https://images.generated.photos/SjKqjo2lSuQUXExn-Sn_V6xG_JfSfxbZCnXpyirqENA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvNDFhMzQ4/ODYtMDJlNS00ZWM5/LWIzNjktYTg5NDg0/ODc5MGI5LmpwZw.jpg",
        fotoPost: "https://picsum.photos/id/232/200/150",
        comentario: "Foto 2",
      },
      {
        id: 3,
        nomeUsuario: "Roberto",
        fotoUsuario:
          "https://images.generated.photos/HmSwNiKcS7MWs4PAL1pmq0AIsJ4RaAchWw29ANQqRwA/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LmNvbmQvZmYxZWE5/MzQtNDhmZS00ZmIw/LTk2YjgtOTVkMDlj/YThmNmUwLmpwZw.jpg",
        fotoPost: "https://picsum.photos/id/237/200/150",
        comentario: "Foto 3",
      },
    ],
    valorInputId: "",
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
    valorInputComentario: "",
  };

  adicionarPost = (event) => {
    const NovoPost = {
      id: this.state.valorInputId,
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario:
        "https://cdn1.iconfinder.com/data/icons/astronomi-1/512/elien-256.png",
      fotoPost: this.state.valorInputFotoPost,
      comentario: this.state.valorInputComentario,
    };

    this.setState({
      posts: [...this.state.posts, NovoPost],
      valorInputId: event.target.value,
      valorInputNomeUsuario: event.target.value,
      valorInputFotoUsuario: event.target.value,
      valorInputFotoPost: event.target.value,
      valorInputComentario: event.target.value,
    });
    console.log(this.state.posts);
  };

  onChangeInputId = (event) => {
    this.setState({
      valorInputId: event.target.value,
    });

    console.log(this.state.valorInputId);
  };

  onChangeInputNoUsuario = (event) => {
    this.setState({
      valorInputNomeUsuario: event.target.value,
    });

    console.log(this.state.valorInputNomeUsuario);
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({
      valorInputFotoUsuario: event.target.value,
    });

    console.log(this.state.valorInputFotoUsuario);
  };

  onChangeInputFotoPost = (event) => {
    this.setState({
      valorInputFotoPost: event.target.value,
    });

    console.log(this.state.valorInputFotoPost);
  };

  onChangeInputComentario = (event) => {
    this.setState({
      valorInputComentario: event.target.value,
    });

    console.log(this.state.valorInputComentario);
  };

  render() {
    return (
      <MainContainer>
        {this.state.posts.map((post) => (
          <Post
            key={post.id}
            nomeUsuario={post.nomeUsuario}
            fotoUsuario={post.fotoUsuario}
            fotoPost={post.fotoPost}
            comentario={post.comentario}
          />
        ))}

        <FormContainer>
          {/* <input
            type="text"
            placeholder="Id"
            value={this.state.valorInputId}
            onChange={this.onChangeInputId}
          /> */}
          <input
            type="text"
            placeholder="Nome do Usuário"
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNoUsuario}
          />
          {/* <input
            type="text"
            placeholder="Foto do Usuário"
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
          /> */}
          <input
            type="text"
            placeholder="Foto do Post"
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
          />
          <input
            type="text"
            placeholder="Comentário"
            value={this.state.valorInputComentario}
            onChange={this.onChangeInputComentario}
          />
          <button onClick={this.adicionarPost}>Adicionar Post</button>
        </FormContainer>
      </MainContainer>
    );
  }
}

export default App;
