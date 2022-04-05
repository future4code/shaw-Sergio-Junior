import React from 'react'
import axios from 'axios'
import SegundaTela from './components/segundaTela'
import PrimeiraTela from './components/primeiraTela'


export const headers = {

  headers: {
    Authorization: "Sergio-Dias-shaw"
  }
}

class App extends React.Component {

  state = {
    user: [],
    valorInputNome: "",
    valorInputEmail: "",
    filtrarNome: "",
    etapa: 1
  }

  renderizarEtapa = () => {
    switch (this.state.etapa) {
      case 2:
        return <SegundaTela />;
        break;
      default:
        return <PrimeiraTela />;
    }
  };

  onClickScreen = () => {
    if (this.state.etapa < 2) {
      this.setState({ etapa: this.state.etapa + 1 })
    } else if (this.state.etapa >= 2) {
      this.setState({ etapa: this.state.etapa - 1 })
    }
  };

  render() {

    return (
      <div>
        <button onClick={this.onClickScreen}>Trocar de tela</button>
        {this.renderizarEtapa()}
      </div >
    );
  }
}

export default App;
