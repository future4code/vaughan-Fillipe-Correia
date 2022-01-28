import React from "react";
import styled from 'styled-components';
import SongDetailComponent from "./components/PlaylistDetailComponent";
import PlaylistPage from "./components/PlaylistPage";
import CreatePlaylist from "./components/CreatePlaylist";


const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #f5f5f5;
    padding: 20px;
    gap: 20px;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    padding: 20px;
    gap: 20px;
`;

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #f5f5f5;
    /* padding: 50px; */
    gap: 20px;
`;


export default class App extends React.Component {
  state = {
    currentScreen: "CreatePlaylist",
    playlistClicked: false,
  }

  goToPlaylistPage = () => {
    this.setState({ currentScreen: "PlaylistPage" });
  }

  goToCreatePlaylist = () => {
    this.setState({ currentScreen: "CreatePlaylist" });

  }

  openSongDetailComponent = () => {
    this.setState({ currentScreen: "SongDetailComponent" });
    this.setState({ playlistClicked: !this.state.playlistClicked });
  }

  renderScreen = () => {
    switch (this.state.currentScreen) {
      case "CreatePlaylist":
        return <CreatePlaylist />;
      case "SongDetail":
        return <SongDetailComponent />;
      case "PlaylistPage":
        return <PlaylistPage  />;
      default:
        return <CreatePlaylist  />;
    }
  }

    render() {
        return (
            <div>
                <Header>
                    <h1>Labenu Music</h1>
                </Header>
                <Main>
                    {this.renderScreen()}
                </Main>
                <Footer>
                    <button onClick={this.goToCreatePlaylist}>Página de criar playlist</button>
                    <button onClick={this.goToPlaylistPage}>Ver Playlists</button>
                </Footer>
            </div>
        )
    }
}