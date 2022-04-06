import React from 'react'
import SegundaTela from './components/segundaTela'
import PrimeiraTela from './components/primeiraTela'
import styled from 'styled-components'

export const headers = {
  headers: {
    Authorization: "Sergio-Dias-shaw"
  }
}

const MainContainerButton = styled.div`
display: flex;
justify-content:center;
text-align: center;
align-items: center;
padding: 2rem;
button{
box-shadow: 0 2px 5px 1px ;
width: 25%;
padding: 5px;
margin: 0 1px 0 1px; 
border: none;
border-radius: 15px;
opacity: 0.8;
&:hover { 
  opacity: 1;} 
}
`

class App extends React.Component {

  state = {
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
        <MainContainerButton>
          <button onClick={this.onClickScreen}>Trocar de tela</button>
        </MainContainerButton>
        {this.renderizarEtapa()}
      </div >
    );
  }
}

export default App;
