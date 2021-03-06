import React from "react";
import Playlist from "./pages/Playlists/Playlist";
import PlaylistDetail from "./pages/PlaylistDetail/PlaylistDetail";
import NewPlaylist from "./pages/Playlists/NewPlaylist";
import { MainContainer, ContainerBotoes, ContainerDois } from "./styles";

export default class App extends React.Component {
  state = {
    currentScreen: "Playlists",
    clickedPlaylist: "",
    playlistName: ""
  }

  screenSelector = (screenValue) => {
    this.setState({ currentScreen: screenValue })
  }
  paginaDetalhes = (listId, listName) => {
    this.setState({ currentScreen: "Detail", clickedPlaylist: listId, playlistName: listName })
  }
  selectScreen = () => {
    switch (this.state.currentScreen) {
      case "Playlist":
        return <Playlist paginaDetalhes={this.paginaDetalhes} />
      case "Detail":
        return <PlaylistDetail idPlaylist={this.state.clickedPlaylist} playlistName={this.state.playlistName} />
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


