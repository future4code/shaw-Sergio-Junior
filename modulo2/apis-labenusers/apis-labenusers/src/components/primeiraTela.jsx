import React from "react";
import axios from "axios";
import styled from 'styled-components'
import { headers } from "../App";

const ContainerInputs = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
  input {
    box-shadow: 0 1px 2px 1px ;
    display: flex;
    text-align: center;
    margin: 0 5px; 
    border: none;
    border-radius: 15px;
    background-color: lightcyan;
    opacity: 0.8;
    padding: 5px;
    &:hover { 
      opacity: 1;
    }
  }
  button{
    box-shadow: 0 1px 2px 1px ;
    padding: 5px;
    display: flex;
    text-align: center;
    margin: 0 5px; 
    border: none;
    border-radius: 15px;
    opacity: 0.8;
    &:hover { 
      opacity: 1;
    }
  }
`

export default class PrimeiraTela extends React.Component {

  state = {
    nome: "",
    email: "",
  }

  createUser = () => {
    const body =
    {
      name: this.state.nome,
      email: this.state.email,
    }
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    axios
      .post(url, body, headers)
      .then((res) => {
        alert("Usuário criado com sucesso")
        this.setState({
          nome: "", email: ""
        })
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  onChangeNome = (ev) => {
    this.setState({ nome: ev.target.value })
  }
  onChangeEmail = (ev) => {
    this.setState({ email: ev.target.value })
  }

  render() {

    return (
      <ContainerInputs>
        <input
          value={this.state.nome}
          placeholder='Nome'
          onChange={this.onChangeNome}
        />
        <input
          value={this.state.email}
          onChange={this.onChangeEmail}
          placeholder='E-mail'
        />
        <button onClick={this.createUser}>Criar usuário</button>
      </ContainerInputs>
    )
  }
}