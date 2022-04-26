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

export default function LoginPage() {
    return (
        <DivContainerMain>
            <h1>
                Login
            </h1>
            <input type="email" value="E-mail"/>
            <input type="password" value="password"/>
            <button>Ver viagens</button>
            <button>Área de Admin</button>
        </DivContainerMain>
    )
}