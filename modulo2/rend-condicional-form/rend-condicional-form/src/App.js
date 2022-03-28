import './App.css';
import React from 'react';
import DadosGerais from './Pages/DadosGerais';
import EnsinoSuperior from './Pages/EnsinoSuperior';
import GeraisEnsino from './Pages/GeraisEnsino';
import FinalFormulario from './Pages/FinalFormulario';
import styled from 'styled-components'

const MainContainer = styled.div`
display: flex; 
flex-direction:column; 
justify-content: center; 
text-align: center;
align-items: center;
`

class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <DadosGerais />;
        break;
      case 2:
        return <EnsinoSuperior />;
        break;
      case 3:
        return <GeraisEnsino />;
        break;
      case 4:
        return <FinalFormulario />;
        break;
      default:
        return <DadosGerais />;
        break;
    }
  }


  proximaEtapa = () => {
    // { this.state.etapa >= 3 ? document.getElementById('x').style.visibility = 'hidden' : document.getElementById('x').style.visibility = 'show' }
    const novaEtapa = this.state.etapa + 1
    this.setState({ etapa: novaEtapa })
  }

  render() {



    return (
      <MainContainer>
        {this.renderizaEtapa()}
        <br />
        {this.state.etapa <=3 && 
        <button id='x' onClick={this.proximaEtapa}>Próxima etapa</button>
      }
      </MainContainer>
    );
  }
}

export default App;
