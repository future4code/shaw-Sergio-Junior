import React from "react";
import { useNavigate } from "react-router-dom";

export default function AdminHomePage() {
    const navigate = useNavigate()

    const goBackPage = () => {
        navigate(-1)
    }

    const goToCreateTripPage = () => {
        navigate("/admin/trips/create")
    }

    const goToLoginPage = () => {
        navigate("/login")
    }

    const goToTripDetailsPage = () => {
        navigate("/admin/trips/list")
    }


    return (
        <div>
            <h4>
                Painel Administrativo
            </h4>
            <button onClick={goBackPage}>Voltar</button>
            <button onClick={goToCreateTripPage}>Criar Viagem</button>
            <button onClick={goToLoginPage}>Logout</button>
            <div>
                <p onClick={goToTripDetailsPage}>
                    Card em componente da lista de viagens
                </p>
            </div>
        </div >
    );
}

