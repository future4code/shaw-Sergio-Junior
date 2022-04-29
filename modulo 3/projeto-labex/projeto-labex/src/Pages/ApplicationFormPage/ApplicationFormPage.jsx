import styled from 'styled-components'
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import dataJson from '../../json/paises-array.json'

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
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [applicationText, setApplicationText] = useState("")
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState("")
    const [idTrip, setIdTrip] = useState("")

    useEffect(() => {
        props.getTripsList()
    }, [props.tripList])

    const navigate = useNavigate()
    const goBackPage = () => {
        navigate(-1)
    }

    const tripsNames = props.tripList.map((tripName) => {
        return (
            <option key={tripName.id} value={tripName.id}> {tripName.name} </option >
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
    const onChangeId = (ev) => {
        setIdTrip(ev.target.value)
    }

    const applyToTrip = (tripId) => {
        const body = {
            name: name,
            age: age,
            applicationText: applicationText,
            profession: profession,
            country: country,
        }
        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/sergio-dias-shaw/trips/${tripId}/apply`, body)
            .then((res) => {
                alert(res.data.message)
                setName("")
                setApplicationText("")
                setAge("")
                setCountry("")
                setProfession("")
                setIdTrip("")
            })
            .catch((err) => {
                alert(err.response.data.message);
            })
    }

    //-- MAP DOS PAISES VINDOS DO JSON --//
    const paises = dataJson.map((pais) => {
        return (
            <option key={pais.ordem} value={pais.nome}>{pais.nome}</option>
        )
    })

    return (
        <FlexContainer>
            <h4>
                Inscreva-se para uma viagem
            </h4>
            <select value={idTrip} onChange={onChangeId} required>
                <option>Escolha uma viagem</option>
                {tripsNames}
            </select>
            <input
                required
                type="text"
                placeholder="Name"
                value={name}
                onChange={onChangeName}
            />
            <input
                required
                type="number"
                placeholder="Age"
                value={age}
                onChange={onChangeAge}
                min={18}
                max={200}
            />
            <input
                required
                type="text"
                placeholder='Application text'
                value={applicationText}
                onChange={onChangeApplicationText}
            />
            <input
                required
                type="text"
                placeholder="Job"
                value={profession}
                onChange={onChangeProfession}
            />
            <select value={country} onChange={onChangeCountry}>
                <option value="Escolha um país">Escolha um país</option>
                {paises}
            </select>
            <div>
                <button onClick={goBackPage}>Voltar</button>
                <button onClick={() => applyToTrip(idTrip)}>Enviar</button>
            </div>
        </FlexContainer>
    )
}