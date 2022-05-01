import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import { UseProtectedPage } from "../../Hooks/UseProtectedPage";
import { goBackPage, goToCreateTripPage, onClickLogOut } from '../../Routes/Coordinator'
import { MainContainerAdminHome, ContainerTripListAdmin } from "./index";
import { header, baseUrl, loadingUrl } from "../../Constants/constants"



export default function AdminHomePage(props) {
    const navigate = useNavigate()

    //-- RENDERIZAÇÃO CONDICIONAL PAGINA PROTEGIDA (SOMENTE ADMIN)  --//
    UseProtectedPage()

    //-- DID MOUNT & UPDATE --//
    useEffect(() => {
        props.getTripsList()
    }, [props.tripList])

    //-- PEGANDO TRIP ID --//  
    const getTripId = (tripId) => {
        props.setTripId(tripId)
        navigate(`/admin/trips/${tripId}`)
    }

    //-- USANDO AXIOS DE DELETE --//  
    const onClickDeleteTrip = (tripId) => {
        axios
            .delete(`${baseUrl}trips/${tripId}`, header)
            .then((res) => {
                alert("trip deleted")
            })
            .catch((err) => {
                console.log(err.response);
            })
    }

    //-- FAZENDO MAP DA LISTA DE TRIP --// 
    const tripsList = props.tripList.map((tripName) => {
        return (
            <ContainerTripListAdmin key={tripName.id}>
                <p onClick={() => getTripId(tripName.id)}>{tripName.name}</p>
                <button onClick={() => onClickDeleteTrip(tripName.id)}>X</button>
            </ContainerTripListAdmin>
        )
    })

    return (
        <MainContainerAdminHome>
            <h4>
                Painel Administrativo
            </h4>
            <div>
                <button onClick={() => goBackPage(navigate)}>Voltar</button>
                <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
                <button onClick={() => onClickLogOut(navigate)}>Logout</button>
            </div>
            <div>
                {props.tripList.length ? tripsList : <img src={loadingUrl} />}
            </div>
        </MainContainerAdminHome >
    );
}

