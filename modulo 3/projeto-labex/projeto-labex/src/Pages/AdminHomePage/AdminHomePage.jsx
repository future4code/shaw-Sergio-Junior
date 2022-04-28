import React from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import { UseProtectedPage } from "../../Hooks/UseProtectedPage";


export default function AdminHomePage(props) {
    const navigate = useNavigate()
    UseProtectedPage()
    const goBackPage = () => {
        navigate(-1)
    }
    const goToCreateTripPage = () => {
        navigate("/admin/trips/create")
    }
    const onClickLogOut = () => {
        localStorage.clear()
        navigate("/")
    }


    useEffect(() => {
        props.getTripsList()
    }, [props.tripList])

    const getTripId = (tripId) => {
        props.setTripId(tripId)
        navigate(`/admin/trips/${tripId}`)
    }

    // -- funcao apagar trip 

    const tripsList = props.tripList.map((tripName) => {
        return (
            <div key={tripName.id}>
                <p onClick={() => getTripId(tripName.id)}>{tripName.name}</p>
                <button>X</button>
            </div>
        )
    })

    return (
        <div>
            <h4>
                Painel Administrativo
            </h4>
            <button onClick={goBackPage}>Voltar</button>
            <button onClick={goToCreateTripPage}>Criar Viagem</button>
            <button onClick={onClickLogOut}>Logout</button>
            <div>
                {tripsList}
            </div>
        </div >
    );
}

