import React from 'react'
import styled from 'styled-components'
import Mensagem from './components/layout';
import './App.css';

const ContainerMain = styled.div`
display:flex;
flex-direction:column; 
background-image: url(https://fasbam.edu.br/wp-content/uploads/2020/01/WhatsApp-Background.jpg) ;
min-height: 100vh;
justify-content:end;
text-align:center;
padding:3rem;
`


function App() {
  return (
    <ContainerMain>
      <Mensagem />
    </ContainerMain>
  );
}

export default App;
