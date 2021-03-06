import React from "react";
import axios from "axios";
import { ContainerPlaylist, PlaylistP, BotaoApagar, DivBotaoApagar } from "./styles";


export const headers = {
    headers: {
        Authorization: "Sergio-Dias-Shaw"
    }
}
export default class Playlist extends React.Component {
    state = {
        playlist: []
    }
    componentDidMount() {
        this.getAllPlaylists()
    }
    getAllPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios
            .get(url, headers)
            .then((res) => {
                this.setState({ playlist: res.data.result.list })
            })
            .catch((err) => {
                alert(err.response.data.message)
            })

    }
    deletePlaylist = (idPlaylist) => {
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}`, headers)
            .then((res) => {
                this.getAllPlaylists()
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        const playlistList = this.state.playlist.map((list) => {
            return (
                <DivBotaoApagar>
                    <PlaylistP key={list.id} onClick={() => this.props.paginaDetalhes(list.id, list.name)}>
                        {list.name}
                    </PlaylistP>
                    <BotaoApagar onClick={() => this.deletePlaylist(list.id)}>🙅</BotaoApagar>
                </DivBotaoApagar>
            )
        })
        return (
            <ContainerPlaylist>
                <h1>Playlists</h1>
                <h2>{playlistList}</h2>
            </ContainerPlaylist>
        )
    }
}