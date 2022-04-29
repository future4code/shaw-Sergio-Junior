import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import { UseProtectedPage } from "../../Hooks/UseProtectedPage";
import { goBackPage, goToCreateTripPage, onClickLogOut } from '../../Routes/Coordinator'


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
        const token = localStorage.getItem("token")
        const header = {
            headers: {
                auth: token
            }
        }
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/sergio-dias-shaw/trips/${tripId}`, header)
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
            <div key={tripName.id}>
                <p onClick={() => getTripId(tripName.id)}>{tripName.name}</p>
                <button onClick={() => onClickDeleteTrip(tripName.id)}>X</button>
            </div>
        )
    })

    return (
        <div>
            <h4>
                Painel Administrativo
            </h4>
            <button onClick={() => goBackPage(navigate)}>Voltar</button>
            <button onClick={() => goToCreateTripPage(navigate)}>Criar Viagem</button>
            <button onClick={() => onClickLogOut(navigate)}>Logout</button>
            <div>
                {tripsList}
            </div>
        </div >
    );
}

