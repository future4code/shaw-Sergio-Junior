import React from "react";
import axios from "axios";
import { headers } from "../App";


export default class segundaTela extends React.Component {

    state = {
        user: [],
        valorInputNome: "",
        valorInputEmail: "",
        filtrarNome: "",
        etapa: 1
    }

    componentDidMount() {
        this.getAllUsers()
    }
    getAllUsers = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios
            .get(url, headers)
            .then((res) => {
                this.setState({ user: res.data })
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }
    deleteUser = (idUser) => {
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUser}`, headers)
            .then((res) => {
                this.getAllUsers()
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
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

    render() {
        const listaFiltradaNomes = this.listaFiltrada()
        const userList = listaFiltradaNomes.map((usuario) => {
            return <li key={usuario.id}>{usuario.name}  <button onClick={() => this.deleteUser(usuario.id)}>x</button></li>
        })
        return (
            <div>
                <ul>
                    {userList}
                </ul>
                <hr />
                <div>
                    <label>
                        <input
                            value={this.props.filtrarNome}
                            onChange={this.onChangeNomeFiltrado}
                            placeholder='Nome exato para busca'></input>
                        <button onChange={this.filteredSearch}>Salvar edição</button>
                    </label>
                </div>
            </div>
        )
    }
}

