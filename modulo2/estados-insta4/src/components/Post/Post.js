import React from "react";
import styled from "styled-components";

import { IconeComContador } from "../IconeComContador/IconeComContador";

import iconeCoracaoBranco from "../../img/favorite-white.svg";
import iconeCoracaoPreto from "../../img/favorite.svg";
import iconeComentario from "../../img/comment_icon.svg";
import { SecaoComentario } from "../SecaoComentario/SecaoComentario";
import iconeBookmarkBranco from "../../img/bookmarkbranco.svg";
import iconeBookmarkPreto from "../../img/bookmarkpreto.svg";
import { Bookmark } from "../Bookmark/Bookmark";
import { Share } from "../Share/Share";
import iconeShare from "../../img/share.svg";
import { SecaoShare } from "../SecaoShare/SecaoShare";
// import { Comentario } from "../Comentario/Comentario";

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`;

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const PostFooter = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`;

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`;

const PostPhoto = styled.img`
  width: 100%;
`;

const PostComent = styled.div`
  display: flex;
  font-size: 16px;
  margin-left: 10px;
`;

class Post extends React.Component {
  state = {
    curtido: false,
    marcado: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    compartilhado: false,
    comentarioPostado: false,
  };

  onClickCurtida = () => {
    console.log("Curtiu!");
    this.setState({
      curtido: !this.state.curtido,
      numeroCurtidas: this.state.curtido
        ? this.state.numeroCurtidas - 1
        : this.state.numeroCurtidas + 1,
    });
  };

  onClickBookmark = () => {
    this.setState({
      marcado: !this.state.marcado,
    });
  };

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando,
    });
  };

  onClickShare = () => {
    this.setState({
      compartilhado: !this.state.compartilhado,
    });
  };

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
      comentarioPostado: true,
    });
  };

  render() {
    let iconeCurtida;

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto;
    } else {
      iconeCurtida = iconeCoracaoBranco;
    }

    let iconeBookmark;

    if (this.state.marcado) {
      iconeBookmark = iconeBookmarkPreto;
    } else {
      iconeBookmark = iconeBookmarkBranco;
    }

    let componenteComentario;

    if (this.state.comentando) {
      componenteComentario = (
        <SecaoComentario aoEnviar={this.aoEnviarComentario} />
      );
    }

    let componenteShare;
    if (this.state.compartilhado) {
      componenteShare = <SecaoShare />;
    }

    return (
      <PostContainer>
        <PostHeader>
          <UserPhoto src={this.props.fotoUsuario} alt={"Imagem do usuario"} />
          <p>{this.props.nomeUsuario}</p>
        </PostHeader>

        <PostPhoto src={this.props.fotoPost} alt={"Imagem do post"} />

        <PostComent alt={"Comentário do usuário"}>
          <p>{this.props.comentario}</p>
        </PostComent>

        <PostFooter>
          <IconeComContador
            icone={iconeCurtida}
            onClickIcone={this.onClickCurtida}
            valorContador={this.state.numeroCurtidas}
          />

          <IconeComContador
            icone={iconeComentario}
            onClickIcone={this.onClickComentario}
            valorContador={this.state.numeroComentarios}
          />

          <Share icone={iconeShare} onClickShare={this.onClickShare} />

          <Bookmark icone={iconeBookmark} onClickBook={this.onClickBookmark} />
        </PostFooter>
        {componenteComentario}
        {componenteShare}
        {/* {componenteComentarios} */}
      </PostContainer>
    );
  }
}

export default Post;
