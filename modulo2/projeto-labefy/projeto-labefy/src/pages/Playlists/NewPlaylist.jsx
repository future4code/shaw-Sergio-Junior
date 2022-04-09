import React from "react";
import axios from "axios";
import { headers } from "./Playlist";
import { ContainerNewPlaylist } from "./styles";

export default class NewPlaylist extends React.Component {
    state = {
        playlistName: ""
    }
    createPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = { name: this.state.playlistName }
        axios
            .post(url, body, headers)
            .then((res) => {
                this.setState({ playlistName: "" })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    onChangePlaylistName = (e) => {
        this.setState({ playlistName: e.target.value })
    }
    render() {
        return (
            <ContainerNewPlaylist>
                <input
                    placeholder="Nome"
                    value={this.state.playlistName}
                    onChange={this.onChangePlaylistName}
                />
                <button onClick={this.createPlaylist}>
                    Adicionar
                </button>
            </ContainerNewPlaylist>
        )
    }
}