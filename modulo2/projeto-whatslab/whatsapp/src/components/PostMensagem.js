import React from 'react'
import {BalaoDeMensagem, ContainerNome, Doublecheck} from './EstilizacaoBalao'
import imagem from '../images/doublecheck.svg'
 
class PostMensagem extends React.Component {

    render() {
        const nome = this.props.nome.toLowerCase()

        if (nome === "eu") {
            return (
                <BalaoDeMensagem tipo={"eu"}>
                    {this.props.conteudo}
                    <Doublecheck src={imagem}/>
                </BalaoDeMensagem>
            )
        } else {
            return (
                <BalaoDeMensagem tipo={"outro"}>
                    <ContainerNome>{this.props.nome}</ContainerNome>
                    <div>{this.props.conteudo}</div>
                </BalaoDeMensagem>
            )
        }

    }
}

export default PostMensagem
