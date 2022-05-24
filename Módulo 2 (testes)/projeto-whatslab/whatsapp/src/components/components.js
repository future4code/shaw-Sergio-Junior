import React from 'react'
import styled from 'styled-components'
import PostMensagem from './PostMensagem'
import { Titulo } from './EstilizacaoBalao'

const InputUm = styled.input`
width: 10%;
height: 1.5rem;
@media(max-width: 620px) {
    width: 30%;
    }
`
const InputDois = styled.input`
width: 40%;
min-height: 1.5rem;
@media(max-width: 620px) {
    width: 60%;
    }
`
const Botao = styled.button`
height: 1.5rem;
border-radius: 15px;
&:hover {
    cursor: pointer; 
    background-color:darkgreen;
    color: white;
    opacity: 0.8;
}
`

const InputsBotao = styled.div`
display:flex; 
align-items: center;
justify-content: center; 
padding: 3rem;

    input { 
        border-radius: 15px;
        padding-left:1rem;
        border: none;
        margin: 1rem;  
        font-weight: 600;
    }

    @media(max-width: 620px) {
    flex-direction: column;
  }
`

const MainContainer = styled.div`
display:flex;
justify-content: space-between;
flex-direction: column;
min-height:100vh;
`


class Mensagem extends React.Component {

    state = {
        conteudo: [],
        valorInputUsuario: "",
        valorInputConteudo: "",
    }

    adicionaConteudo = () => {
        const novoConteudo = {
            nome: this.state.valorInputUsuario,
            conteudo: this.state.valorInputConteudo,
        };

        const novosConteudos = [...this.state.conteudo, novoConteudo];

        this.setState({ conteudo: novosConteudos })

        this.state.valorInputConteudo = "";
        this.state.valorInputUsuario = "";
    }

    onChangeInputUsuario = (event) => {
        this.setState({ valorInputUsuario: event.target.value });
    }

    onChangeInputConteudo = (event) => {
        this.setState({ valorInputConteudo: event.target.value });
    }

    render() {

        const listaConteudo = this.state.conteudo.map((pessoa) => {
            return <PostMensagem
                nome={pessoa.nome}
                conteudo={pessoa.conteudo}
            />

        })

        return (

            <MainContainer>
                <Titulo><h3>WhatsLab</h3></Titulo>
                <div>
                    {listaConteudo}
                    <InputsBotao>
                        <InputUm
                            value={this.state.valorInputUsuario}
                            onChange={this.onChangeInputUsuario}
                            placeholder={"Nome"}
                        />
                        <InputDois
                            value={this.state.valorInputConteudo}
                            onChange={this.onChangeInputConteudo}
                            placeholder={"Mensagem"}
                        />
                        <Botao onClick={this.adicionaConteudo}>Enviar</Botao>
                    </InputsBotao>
                </div>
            </MainContainer>
        )
    }
}

export default Mensagem;