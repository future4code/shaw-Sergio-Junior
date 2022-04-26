import styled from "styled-components"
import React from "react";
import { useNavigate } from "react-router-dom";

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

    const goToListTripsPage = () => {
        navigate("/trips/list")
    }

    const goToAdminHomePage = () => {
        navigate("/admin/trips/:id")
    }

    return (
        <DivContainerMain>
            <h1>
                Login
            </h1>
            <input type="email" value="E-mail" />
            <input type="password" value="password" />
            <button onClick={goToListTripsPage}>Ver viagens</button>
            <button onClick={goToAdminHomePage}>Área de Admin</button>
        </DivContainerMain>
    )
}