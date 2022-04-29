import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { goBackPage, goToApplicationFormPage } from '../../Routes/Coordinator'

export default function ListTripsPage(props) {
    const navigate = useNavigate()

    //-- DID MOUNT E DID UPDATE --//
    useEffect(() => {
        props.getTripsList()
    }, [props.tripList])

    const tripListMap = props.tripList.map((trip) => {
        return (
            <div key={trip.id}>
                <p><strong>Nome:</strong> {trip.name}</p>
                <p><strong>Descrição:</strong> {trip.description}</p>
                <p><strong>Planeta:</strong> {trip.planet}</p>
                <p><strong>Duração:</strong> {trip.durationInDays} Dias</p>
                <p><strong>Data:</strong> {trip.date}</p>
                <br />
                <br />
            </div>
        )
    })


    return (
        <div>
            <button onClick={() => goBackPage(navigate)}>Voltar</button>
            <button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</button>
            <h1>
                Lista de Viagens
            </h1>
            <br />
            {tripListMap}
        </div>
    )
}