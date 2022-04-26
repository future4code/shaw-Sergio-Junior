import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {

    const navigate = useNavigate()

    const goToListTripPage = () => {
        navigate("/trips/list")
    }

    const goToLoginPage = () => {
        navigate("/login")
    }

    return (
        <div>
            <h1>
                LabeX
            </h1>
            <button onClick={goToListTripPage}>Ver viagens</button>
            <button onClick={goToLoginPage}>Área de Admin</button>
        </div>
    )
}