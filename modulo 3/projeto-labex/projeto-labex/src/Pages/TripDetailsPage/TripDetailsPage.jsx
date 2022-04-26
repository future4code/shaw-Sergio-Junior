import React from "react"
import styled from "styled-components"

const DivContainerMain = styled.div`
        display: flex;
    flex-direction: column;
    width: 10vw;
    margin: 1rem auto;
    gap: 0.5rem;
    input { 
        border-radius: 10px;
        padding: 0.5rem;
    }
`

export default function TripDetailsPage() {
    return (
        <DivContainerMain>
            <h1>
                Marte
                {/* Viagem */}
            </h1>
            <p>
                Nome: Marte
                Descrição: gf <br />
                Planeta: Marte
                Duração: 132
                Data: 2022-04-30
            </p>
            <button>Voltar</button>
            <h4>Candidatos Pendentes</h4>
                <p>Card do candidato</p>
            <h4>Candidatos Aprovados</h4>
            <ul>
                <li>lista de candidatos</li>
            </ul>
        </DivContainerMain>
    )
}