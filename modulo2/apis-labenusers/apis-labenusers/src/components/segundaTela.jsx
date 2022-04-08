import React from "react";
import axios from "axios";
import styled from 'styled-components'
import { headers } from "../App";


const ContainerBotao = styled.label`
display: flex;
justify-content: center;
input {
    box-shadow: 0 1px 2px 1px ;
    display: flex;
    text-align: center;
    margin: 0 1px 0 1px; 
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
    margin: 0 1px 0 1px; 
    border: none;
    border-radius: 15px;
    opacity: 0.8;
    &:hover { 
      opacity: 1;
    }
  }
`
const ContainerLista = styled.div`
display: flex;
justify-content: center;
    li{
    width:30%;
    display:flex; 
    justify-content: space-between;
    padding: 0.3rem;
    button{
    box-shadow: 0 1px 2px 1px ;
    font-weight: 500;
    padding: 5px;
    display: flex;
    text-align: center;
    margin: 0 1px 0 1px; 
    border: none;
    border-radius: 15px;
    opacity: 0.8;
    &:hover { 
      opacity: 1;
    }
  }
    }
`

export default class segundaTela extends React.Component {

    state = {
        user: [],
        filtrarNome: "",
    }

    componentDidMount() {
        this.getAllUsers()
    }

    getAllUsers = async () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        try {
            const res = await axios.get(url, headers)
            this.setState({ user: res.data })
        }
        catch (err) {
            alert(err.response.data.message)
        }
    }

    deleteUser = async (idUser) => {
        try {
            const res = await axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUser}`, headers)
            this.getAllUsers()
        } catch (err) {
            alert(err.response.data.message)
        }
    }

    listaFiltrada = () => {
        return this.state.user
            .filter(usuario => {
                return usuario.name.toLowerCase().includes(this.state.filtrarNome.toLowerCase())
            })
    }

    onChangeNomeFiltrado = (ev) => {
        this.setState({ filtrarNome: ev.target.value })
    }

    onClick = () => {
        this.getAllUsers()
    }

    render() {
        const listaFiltradaNomes = this.listaFiltrada()
        const userList = listaFiltradaNomes.map((usuario) => {
            return (
                <ContainerLista>
                    <li key={usuario.id}>
                        <strong><em>{usuario.name}</em></strong>
                        <button onClick={() => this.deleteUser(usuario.id)}>
                            deletar usuário
                        </button>
                    </li>
                </ContainerLista>)
        })
        return (
            <div>
                <ul>
                    {userList}
                </ul>
                <div>
                    <ContainerBotao>
                        <input
                            value={this.state.filtrarNome}
                            onChange={this.onChangeNomeFiltrado}
                            placeholder='Nome exato para busca'>
                        </input>
                        <button onClick={this.onClick}>Salvar edição</button>
                    </ContainerBotao>
                </div>
            </div>
        )
    }
}

