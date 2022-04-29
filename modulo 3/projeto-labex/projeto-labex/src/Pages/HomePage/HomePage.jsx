import React from "react";
import { useNavigate } from "react-router-dom";
import { goToListTripPage, goToLoginPage } from '../../Routes/Coordinator'

export default function HomePage() {
    const navigate = useNavigate()

    return (
        <div>
            <h1>
                LabeX
            </h1>
            <button onClick={() => goToListTripPage(navigate)}>Ver viagens</button>
            <button onClick={() => goToLoginPage(navigate)}>Área de Admin</button>
        </div>
    )
}