import React from "react";
import axios from "axios";
import styled from 'styled-components';

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
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    cursor: pointer;

    &:hover {
        background-color: #e5e5e5;
    }
`;

export default class PlaylistPage extends React.Component {
  state = {
    playlists: [],
    details: false
  };

  componentDidMount() {
    this.getPlaylists();
  }

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
        <PlaylistCard
        key={playlist.url}
        onClick={() => this.props.openSongDetailComponent(playlist.url)}>
          <h1>{playlist.name}</h1>
        </PlaylistCard>
      );
    });

    return (
        <div>
        <h1>Playlists</h1>
        {playlists}
        
        </div>
    );
  }
}
