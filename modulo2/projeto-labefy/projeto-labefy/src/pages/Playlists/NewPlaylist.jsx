import React from "react";
import axios from "axios";
import { headers } from "./Playlist";
import styled from "styled-components"
import simpsonsnew from "../../simpsonsnew.jpg"

const ContainerNewPlaylist = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100%;
background-image: url(${simpsonsnew});
background-size: cover;
input{
    border:none;
    margin-top: 10vh;
    height: 2rem;
    border-radius: 15px;
    text-align:center;
}

button { 
    border: none;
    width: 30%;
    padding: 0.5rem;
    border-radius: 15px;
    opacity: 0.7; 
    margin-top: 2vh;
    &:hover{
        opacity:1;
        cursor: grab
    }
}
`

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