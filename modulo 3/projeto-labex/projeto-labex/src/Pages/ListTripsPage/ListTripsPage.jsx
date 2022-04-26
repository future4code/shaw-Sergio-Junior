import React from "react";
import { useNavigate } from "react-router-dom";

export default function ListTripsPage() {
    const navigate = useNavigate()

    const goBackPage = () => {
        navigate(-1)
    }

    const goToApplicationFormPage = () => {
        navigate("/trips/application")
    }
    return (
        <div>
            <button onClick={goBackPage}>Voltar</button>
            <button onClick={goToApplicationFormPage}>Inscrever-se</button>
            <h1>
                Lista de Viagens
            </h1>
            <p>lista de viagens</p>
        </div>
    )
}