import React from "react";
import axios from "axios";
import { headers } from "../Playlists/Playlist";
import { ContainerDetalhes, ContainerNewTrack, SongsContainer, BotaoApagar } from "./styles";

export default class PlaylistDetail extends React.Component {

    state = {
        songs: [],
        inputName: "",
        inputArtist: "",
        inputUrl: "",

    }
    componentDidMount() {
        this.getPlaylistTracks()
    }
    getPlaylistTracks = () => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks`, headers)
            .then((res) => {
                this.setState({ songs: res.data.result.tracks })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    addPlaylistTracks = (idPlaylist) => {
        const body = {
            name: this.state.inputName,
            artist: this.state.inputArtist,
            url: this.state.inputUrl
        }
        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idPlaylist}/tracks`, body, headers)
            .then(() => {
                this.getPlaylistTracks()
                this.setState({
                    inputName: "",
                    inputArtist: "",
                    inputUrl: ""
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }
    onChangeInputName = (e) => {
        this.setState({ inputName: e.target.value })
    }
    onChangeInputArtist = (e) => {
        this.setState({ inputArtist: e.target.value })
    }
    onChangeInputUrl = (e) => {
        this.setState({ inputUrl: e.target.value })
    }
    deleteTrack = (idPlaylist) => {
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlaylist}/tracks/${idPlaylist}`, headers)
            .then((res) => {
                this.getPlaylistTracks()
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        const songs = this.state.songs.map((song) => {
            return (
                <SongsContainer key={song.id}>
                    <p>{song.name}</p>
                    <audio controls="controls">
                        <source src={song.url} type="audio/mp3" />
                    </audio>
                    <BotaoApagar onClick={() => this.deleteTrack(song.id)}>🙅</BotaoApagar>
                </SongsContainer>
            )
        })
        return (
            <ContainerDetalhes>
                <div>
                    {songs}
                </div>
                {/* inputs */}
                <ContainerNewTrack>
                    <p>Adicionar novas músicas:</p>
                    <input
                        placeholder="Música"
                        value={this.state.inputName}
                        onChange={this.onChangeInputName}
                    />
                    <input
                        placeholder="Artista"
                        value={this.state.inputArtist}
                        onChange={this.onChangeInputArtist}
                    />
                    <input
                        placeholder="Url"
                        value={this.state.inputUrl}
                        onChange={this.onChangeInputUrl}
                    />
                    <button onClick={() => this.addPlaylistTracks(this.props.idPlaylist)}>Adicionar</button>
                </ContainerNewTrack>
            </ContainerDetalhes>
        )
    }
}