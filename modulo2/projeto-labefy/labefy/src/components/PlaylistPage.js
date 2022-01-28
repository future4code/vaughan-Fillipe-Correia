import React from "react";
import axios from "axios";
import styled from "styled-components";
import PlaylistDetailComponent from "./PlaylistDetailComponent";

const PlaylistCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  background-color: #f5f5f5;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  cursor: pointer;

  &:hover {
    background-color: #e5e5e5;
  }
`;

export default class PlaylistPage extends React.Component {
  state = {
    playlists: [],
    playlistClicked: false,
  };

  componentDidMount() {
    this.getPlaylists();
  }

  openPlaylistDetailComponent = () => {
    this.setState({ playlistClicked: !this.state.playlistClicked });
    console.log("parece que funcionou");
  };

  renderPlaylistDetailComponent = () => {
    if (this.state.playlistClicked === true) {
      return <PlaylistDetailComponent />;
    }
    console.log("uai funcioniy");
  };

  functionWrapper = () => {
    this.openPlaylistDetailComponent();
    this.renderPlaylistDetailComponent();
  };

  getPlaylists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const config = {
      headers: {
        Authorization: "fillipe-correia-vaughan",
      },
    };
    axios
      .get(url, config)
      .then((response) =>
        this.setState({ playlists: response.data.result.list })
      )
      .catch((error) => console.log(error.message));
  };

  render() {
    const playlists = this.state.playlists.map((playlist) => {
      return (
        <PlaylistCard onClick={this.functionWrapper} key={playlist.id}>
          <h4>{playlist.name}</h4>

          {this.renderPlaylistDetailComponent()}
        </PlaylistCard>
      );
    });

    let clicked;
    if (this.state.playlistClicked === true) {
      clicked = <PlaylistDetailComponent />;
    }

    return (
      <div>
        <h1>Playlists</h1>
        {playlists}
      </div>
    );
  }
}
