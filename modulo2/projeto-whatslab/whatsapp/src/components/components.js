import React from 'react'
import styled from 'styled-components'

const MainContent = styled.div`
    display: flex;
    justify-content:space-evenly;
    text-align: center;
    align-items:center;
    
    button{
        border: none;
        height: 2rem;
        background-color:white;
        width: 5rem;
        border-radius: 15px;
        cursor:pointer; 
        margin-right: 13rem;
        &:hover { 
            color:white; 
            background-color:darkgreen;
            opacity: 0.7;
        }
    }

    input{
        width: 40%;
        height: 2rem;
        border: none;
        padding-left: 1rem;
        border-radius: 20px;
        text-align: start; 
        font-weight: 600;
        margin-left: 5rem
    }
`

const ChangedInput = styled.div`
    margin-right: -8rem
`

const MensagemFinal = styled.div`
    display:flex;
    align-self: flex-start;
    align-items:center;
    border: none;
    border-radius: 20px;
    margin: 1rem;
    background-color:white;
    text-align: center;
    max-width: 60%;
    min-width: 8%;
    margin-bottom: 1.5rem;

    h4 {
        margin-right: 1rem;
        margin-left: 1rem;
    }
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

    //  dentro do render fazer o map da array de objs 

    render() {

        const listaConteudo = this.state.conteudo.map((content) => {
            return <MensagemFinal>
                    <h4>{content.nome} :</h4>
                    <p>{content.conteudo}</p>
            </MensagemFinal>
        })

        return (

            <div>
                <div>
                    {listaConteudo}
                </div>

                <MainContent>
                    <ChangedInput>
                        <input
                            value={this.state.valorInputUsuario}
                            onChange={this.onChangeInputUsuario}
                            placeholder={"Nome"}
                        />
                    </ChangedInput>
                    <input
                        value={this.state.valorInputConteudo}
                        onChange={this.onChangeInputConteudo}
                        placeholder={"Mensagem"}
                    />
                    <button onClick={this.adicionaConteudo}>Enviar</button>
                </MainContent>
            </div>
        )
    }
}

export default Mensagem;