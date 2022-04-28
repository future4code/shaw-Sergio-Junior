import styled from 'styled-components'
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 10vw;
    margin: 1rem auto;
    gap: 0.5rem;
    input { 
        border-radius: 10px;
        padding: 0.2rem;
    }
    select {
        border-radius: 10px;
        padding: 0.2rem;
    }
    `
export default function ApplicationFormPage(props) {
    const [trip, setTrip] = useState("")
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)
    const [applicationText, setApplicationText] = useState("")
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState("")

    useEffect(() => {
        props.getTripsList()
    }, [props.tripList])

    const navigate = useNavigate()

    const goBackPage = () => {
        navigate(-1)
    }

    // const token = localStorage.getItem("token")
    // console.log(token)

    //-- MAP DOS NOMES DAS VIAGENS PARA O SELECT --//
    const tripsNames = props.tripList.map((tripName) => {
        return (
            <option key={tripName.id} value={tripName.name}> {tripName.name} </option >
        )
    })


    const onChangeName = (ev) => {
        setName(ev.target.value)
    }
    const onChangeAge = (ev) => {
        setAge(ev.target.value)
    }
    const onChangeApplicationText = (ev) => {
        setApplicationText(ev.target.value)
    }
    const onChangeProfession = (ev) => {
        setProfession(ev.target.value)
    }
    const onChangeCountry = (ev) => {
        setCountry(ev.target.value)
    }
    const onChangeTrip = (ev) => {
        setTrip(ev.target.value)
    }


    // const applyToTrip = (tripId) => {
    //     const body = {
    //         name: name,
    //         age: age,
    //         applicationText: applicationText,
    //         profession: profession,
    //         country: country,
    //     }
    //     axios
    //         .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/sergio-dias-shaw/trips/${tripId}/apply`)
    //         .then((res)=>{

    //         })
    //         .catch((err)=>{
    //             console.log(err.response);
    //         })
    // }


    return (
        <FlexContainer>
            <h4>
                Inscreva-se para uma viagem
            </h4>
            <select value={trip} onChange={onChangeTrip}>
                <option>Escolha uma viagem</option>
                {tripsNames}
            </select>
            <input type="text" placeholder="Name" value={name} onChange={onChangeName} />
            <input type="number" placeholder="Age" value={age} onChange={onChangeAge} />
            <input type="text" placeholder='Application text' value={applicationText} onChange={onChangeApplicationText} />
            <input type="text" placeholder="Job" value={profession} onChange={onChangeProfession} />
            <select value={country} onChange={onChangeCountry}>
                <option value="Escolha um país">Escolha um país</option>
            </select>
            <div>
                <button onClick={goBackPage}>Voltar</button>
                <button>Enviar</button>
            </div>
        </FlexContainer>
    )
}