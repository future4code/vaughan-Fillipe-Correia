import React from "react";
import styled from 'styled-components';
import SongDetailComponent from "./components/SongDetailComponent";
import PlaylistPage from "./components/PlaylistPage";
import CreatePlaylist from "./components/CreatePlaylist";


export default class App extends React.Component {
  state = {
    currentScreen: "CreatePlaylist",
    clickedPlaylistUrl: "",
  }

  goToPlaylistPage = () => {
    this.setState({ currentScreen: "PlaylistPage" });
    this.setState({ clickedPlaylistUrl: "" });
  }

  goToCreatePlaylist = () => {
    this.setState({ currentScreen: "CreatePlaylist" });

  }

  openSongDetailComponent = (url) => {
    this.setState({ currentScreen: "SongDetailComponent" });
    this.setState({ clickedPlaylistUrl: url });
  }

  renderScreen = () => {
    switch (this.state.currentScreen) {
      case "CreatePlaylist":
        return <CreatePlaylist goToPlaylistPage={this.goToPlaylistPage} />;
      case "SongDetail":
        return <SongDetailComponent url={this.state.clickedPlaylistUrl} />;
      case "PlaylistPage":
        return <PlaylistPage openSongDetailComponent={this.openSongDetailComponent} />;
      default:
        return <CreatePlaylist goToPlaylistPage={this.goToPlaylistPage} />;
    }
  }

    render() {
        return (
            <div>
                <CreatePlaylist />
                
                <SongDetailComponent />
                
                <PlaylistPage />
            </div>
        )
    }
}