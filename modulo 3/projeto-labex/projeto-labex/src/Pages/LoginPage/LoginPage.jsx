import styled from "styled-components"
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import axios from "axios";
import { goBackPage, setTokenAndGoToAdminHome } from '../../Routes/Coordinator'

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
    const navigate = useNavigate()

    //-- STATES --//
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //-- OBS FAZER O FORM --//
    const onChangeEmail = (ev) => {
        setEmail(ev.target.value)
    }
    const onChangePassword = (ev) => {
        setPassword(ev.target.value)
    }

    //-- BOTÃO ENTRAR E SETAR TOKEN DO USUARIO --//
    const onSubmitLogin = () => {
        const body = {
            email: email,
            password: password,
        }
        axios
            .post(
                "https://us-central1-labenu-apis.cloudfunctions.net/labeX/sergio-dias-shaw/login", body
            )
            .then((res) => {
                setTokenAndGoToAdminHome(res, navigate)
            })
            .catch((err) => {
                alert(err.response.data.message)
                setEmail("")
                setPassword("")
            })
    }

    return (
        <DivContainerMain>

            <h1>
                Login
            </h1>
            <input placeholder="Digite seu email" type="email" value={email} onChange={onChangeEmail} />
            <input placeholder="Digite sua senha" type="password" value={password} onChange={onChangePassword} />
            <button onClick={() => goBackPage(navigate)}>Voltar</button>
            <button onClick={() => onSubmitLogin()}>Entrar</button>

        </DivContainerMain>
    )
}