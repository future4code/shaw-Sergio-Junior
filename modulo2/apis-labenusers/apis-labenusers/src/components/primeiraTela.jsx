import React from "react";
import axios from "axios";
import { headers } from "../App";

export default class PrimeiraTela extends React.Component {

      createUser = () => {
        const body =
        {
          name: this.state.valorInputNome,
          email: this.state.valorInputEmail,
        }
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios
          .post(url, body, headers)
          .then((res) => {
            alert("Usuário criado com sucesso")
            this.getAllUsers()
            this.setState({ valorInputEmail: "", valorInputNome: "" })
          })
          .catch((err) => {
            alert(err.response.data.message)
          })
      }

      onChangeNome = (ev) => {
        this.setState({ valorInputNome: ev.target.value })
      }
      onChangeEmail = (ev) => {
        this.setState({ valorInputEmail: ev.target.value })
      }
    
    render() {

        return (
            <div>
                <input
                    value={this.props.valorInputNome}
                    placeholder='Nome'
                    onChange={this.onChangeNome}
                />
                <input
                    value={this.props.valorInputEmail}
                    onChange={this.onChangeEmail}
                    placeholder='Email'
                />
                <button onClick={this.createUser}>Criar usuário</button>
            </div>
        )
    }
}