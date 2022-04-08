import React from "react";
import axios from "axios";
import { headers } from "../Playlists/Playlist";


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


    render() {

        const songs = this.state.songs.map((song) => {
            return <li key={song.id}> {song.name} </li>
        })
        
        return (
            <div>
                <div>
                    {songs}
                </div>
                <div>
                    <h4>Adicionar novas músicas:</h4>
                    <input
                        placeholder="Música"
                        value={this.state.inputName}
                        onChange={this.onChangeInputName}
                    /> <br /> <br />
                    <input
                        placeholder="Artista"
                        value={this.state.inputArtist}
                        onChange={this.onChangeInputArtist}
                    /> <br /> <br />
                    <input
                        placeholder="Url"
                        value={this.state.inputUrl}
                        onChange={this.onChangeInputUrl}
                    /> <br /> <br />
                    <button onClick={() => this.addPlaylistTracks(this.props.idPlaylist)}>Adicionar</button>
                </div>
            </div>
        )
    }
}