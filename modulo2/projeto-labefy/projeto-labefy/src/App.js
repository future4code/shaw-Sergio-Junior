import React from "react";
import Playlist from "./pages/Playlists/Playlist";
import PlaylistDetail from "./pages/PlaylistDetail/PlaylistDetail";
import NewPlaylist from "./pages/Playlists/NewPlaylist";
import styled from "styled-components"
import dark from "./dark.jpg"



const MainContainer = styled.div` 
display: flex;
max-width: 100vw;
max-height: 100vh;
margin: 0;
padding: 0;
box-sizing: border-box;
` 
const ContainerBotoes = styled.div`
display:flex;
flex-direction: column; 
width:50vw;
align-items: flex-start;
justify-content: space-evenly;
background-image: url(${dark});
background-size: cover;
height: 100vh;
  button { 
    margin-left: 2vw;
    font-weight: 500; 
    font-family: cursive;
    height: 15vh;
    width: 20vw;
    border: none;
    border-radius: 100px 10px 100px 50px;
    display:flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    font-size: 3rem;
    opacity: 0.5;
    box-shadow: 3px 5px 5px 0px;
    background-color: black;
    color: white;
    &:hover {
      opacity: 0.7;
      cursor:pointer;
      background-color: lightgray;
      color: black;
    }
  }
`
const ContainerDois = styled.div`
display:flex; 
width:50vw;
align-items: flex-start;
justify-content: space-evenly;
background-color: beige;
`
  
export default class App extends React.Component {

    state = {
    currentScreen: "Playlists",
    clickedPlaylist: ""
  }
  screenSelector = (screenValue) => {
    this.setState({ currentScreen: screenValue })
  }
  paginaDetalhes = (listId) => {
    this.setState({ currentScreen: "Detail", clickedPlaylist: listId })
  }
  selectScreen = () => {
    switch (this.state.currentScreen) {
      case "Playlist":
        return <Playlist paginaDetalhes={this.paginaDetalhes} />
      case "Detail":
        return <PlaylistDetail idPlaylist={this.state.clickedPlaylist} />
      case "New":
        return <NewPlaylist />
      default:
        return <Playlist paginaDetalhes={this.paginaDetalhes} />
    }
  }

  render() {
    return (
      <MainContainer>

        <ContainerBotoes>
          <button onClick={() => this.screenSelector("Playlist")}>Playlists</button>
          <button onClick={() => this.screenSelector("New")}>Nova Playlist</button>
        </ContainerBotoes>

        <ContainerDois>
          {this.selectScreen()}
        </ContainerDois>

      </MainContainer>
    )
  }
}


