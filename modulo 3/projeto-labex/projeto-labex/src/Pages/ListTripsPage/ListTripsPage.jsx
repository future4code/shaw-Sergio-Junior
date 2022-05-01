import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { goBackPage, goToApplicationFormPage } from '../../Routes/Coordinator'
import { MainContainerTripList, CardTripList, ButtonsTripList } from "./index"
import { loadingUrl } from '../../Constants/constants'


export default function ListTripsPage(props) {
    const navigate = useNavigate()

    //-- DID MOUNT E DID UPDATE --//
    useEffect(() => {
        props.getTripsList()
    }, [props.tripList])

    const tripListMap = props.tripList.map((trip) => {
        return (
            <CardTripList key={trip.id}>
                <strong>Nome:</strong> {trip.name}
                <strong>Descrição:</strong> {trip.description}
                <strong>Planeta:</strong> {trip.planet}
                <strong>Duração:</strong> {trip.durationInDays} Dias
                <strong>Data:</strong> {trip.date}
            </CardTripList>
        )
    })


    return (
        <MainContainerTripList>
            <ButtonsTripList>
                <button onClick={() => goBackPage(navigate)}>Voltar</button>
                <button onClick={() => goToApplicationFormPage(navigate)}>Inscrever-se</button>
            </ButtonsTripList>
            <h1>
                Lista de Viagens
            </h1>
            <div>
            {props.tripList.length ? tripListMap : <img src={loadingUrl}/>}
            </div>
        </MainContainerTripList>
    )
}