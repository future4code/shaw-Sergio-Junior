import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const ContainerInputs = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 10px 0px;
  height: 120px;
  width: 300px;
  margin: 10px auto;
  background-color: lightgray; 
  border-radius: 15px;
  &:hover {
    background-color:white;
  }

  input {
    margin: 2px 0;
    border-radius: 10px;
    display:flex; 
    text-align: center;
    &::placeholder {
      font-weight: 600;
    }
  }
   
  button { 
    margin-top: 5px;
    border: none;
    background-color: darkgray;
    border-radius: 15px;
    height:25px; 
    width: 150px; 
    opacity: 0.7;
    font-weight: 600;
    &:hover {
      opacity: 1;
      cursor:pointer;
    }
  }
`

class App extends React.Component {

  state = {
    pessoas: [
      {
        nome: 'Paulinha',
        fotoPerfil: 'https://picsum.photos/50/50?random=3',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nome: 'Sérgio',
        fotoPerfil: 'https://picsum.photos/50/50?random=2',
        fotoPost: 'https://picsum.photos/200/150?random=2'
      },
      {
        nome: 'Wesley',
        fotoPerfil: 'https://picsum.photos/50/50?random=1',
        fotoPost: 'https://picsum.photos/200/150?random=1'
      }
    ],
    valorInputPessoa: "",
    valorInputFotoPerfil: "",
    valorInputFotoPost: "",
  }

  adicionaPessoa = () => {
    const novaPessoa = {
      nome: this.state.valorInputPessoa,
      fotoPerfil: this.state.valorInputFotoPerfil,
      fotoPost: this.state.valorInputFotoPost
    };

    const copiaArray = [...this.state.pessoas, novaPessoa];

    this.setState({
      pessoas: copiaArray
    })

    this.state.valorInputFotoPerfil = ""
    this.state.valorInputPessoa = ""
    this.state.valorInputFotoPost = ""
  }

  onChangeInputPessoa = (event) => {
    this.setState({ valorInputPessoa: event.target.value })
  }
  onChangeInputFotoPerfil = (event) => {
    this.setState({ valorInputFotoPerfil: event.target.value })
  }
  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value })
  }


  render() {

    const listaPessoas = this.state.pessoas.map((pessoa) => {
      console.log(this.state.pessoas)
      return (<MainContainer>
        <Post
          nomeUsuario={pessoa.nome}
          fotoUsuario={pessoa.fotoPerfil}
          fotoPost={pessoa.fotoPost}
        />
      </MainContainer>)
    })

    return (
      <div>
        <ContainerInputs>
          <input
            value={this.state.valorInputPessoa}
            onChange={this.onChangeInputPessoa}
            placeholder={"Nome"}
          />
          <input
            value={this.state.valorInputFotoPerfil}
            onChange={this.onChangeInputFotoPerfil}
            placeholder={"Link foto perfil"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Link foto post"}
          />
          <button onClick={this.adicionaPessoa}>Publicar</button>
        </ContainerInputs>
        <div>
          {listaPessoas}
        </div>

      </div>
    );
  }
}

export default App;
