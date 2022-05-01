import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTripPage, goToLoginPage } from '../../Routes/Coordinator'
import {MainButtonContainer, MainContainerHome} from "./index"

export default function HomePage() {
    const navigate = useNavigate()
    return (
        <MainContainerHome>
            <h1>
                LabeX
            </h1>
            <MainButtonContainer>
                <button onClick={() => goToListTripPage(navigate)}>Ver viagens</button>
                <button onClick={() => goToLoginPage(navigate)}>Área de Admin</button>
            </MainButtonContainer>
        </MainContainerHome>
    )
}