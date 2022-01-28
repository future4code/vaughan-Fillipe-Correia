import React from "react";
import styled from 'styled-components';
import axios from "axios";

const PlaylistCreationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #fafafa;
    padding: 20px;
    gap: 20px;
`;

export default class CreatePlaylist extends React.Component {
    state = {
        playlistName: "",
    }

    handleChange = (event) => {
        this.setState({ playlistName: event.target.value });
    }

    sendPlaylist = () => {
        const url=
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
        const config = {
        headers: {
          Authorization: "fillipe-correia-vaughan",
        },
        };
        const body = {
            name: this.state.playlistName,
        };
        axios
        .post(url, body, config)
        .then((response) => {
            alert("Playlist criada com sucesso!");
            this.setState({ playlistName: "" });
        })
        .catch((error) => {
            alert("Erro ao criar playlist!");
        });
    }



    render() {
        return (
            <PlaylistCreationContainer>
                
                <h1>Criar Playlist</h1>
                <input
                    type="text"
                    placeholder="Nome da Playlist"
                    value={this.state.playlistName}
                    onChange={this.handleChange}
                />
                <button onClick={this.sendPlaylist}>Criar Playlist</button>
                
            </PlaylistCreationContainer>
        )
    }
}
