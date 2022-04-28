import styled from "styled-components"
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import axios from "axios";

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
    //-- STATES --//
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //-- NAVIGATE --// 
    const navigate = useNavigate()

    //-- BOTÃO VOLTAR --//
    const goBackPage = () => {
        navigate(-1)
    }

    const onChangeEmail = (ev) => {
        setEmail(ev.target.value)
    }

    const onChangePassword = (ev) => {
        setPassword(ev.target.value)
    }

    //-- BOTÃO ENTRAR --//
    const onSubmitLogin = () => {
        //-- Body será necessário para o nosso axios, composto pela email e password que o usuário inserir --//
        const body = {
            email: email,
            password: password,
        }
        axios
            //-- Aqui usaremos o nosso body --/
            .post(
                "https://us-central1-labenu-apis.cloudfunctions.net/labeX/sergio-dias-shaw/login", body
            )
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                navigate("/admin/trips/list")
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
            <button onClick={goBackPage}>Voltar</button>
            <button onClick={() => onSubmitLogin()}>Entrar</button>
        </DivContainerMain>
    )
}