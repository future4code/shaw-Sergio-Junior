import { FlexContainerCreateTrip } from './index'
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { UseProtectedPage } from "../../Hooks/UseProtectedPage";
import axios from 'axios';
import { goBackPage } from "../../Routes/Coordinator"
import { token, header } from '../../Constants/constants'


export default function CreateTripPage() {
    const navigate = useNavigate()
    UseProtectedPage()

    //-- STATE --//
    const [name, setName] = useState("")
    const [planet, setPlanet] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [durationInDays, setDurationInDays] = useState(0)

    //-- CONVERSAO DA DATA PARA FORMATO BR --//
    const convertedDate = new Date(date)
    const dateInBr = convertedDate.getDate() + "/" + (convertedDate.getMonth() + 1) + "/" + convertedDate.getFullYear()

    //-- FAZER O FORM --//
    const onChangeName = (ev) => {
        setName(ev.target.value)
    }
    const onChangePlanet = (ev) => {
        setPlanet(ev.target.value)
    }
    const onChangeDate = (ev) => {
        setDate(ev.target.value)
    }
    const onChangeDescription = (ev) => {
        setDescription(ev.target.value)
    }
    const onChangeDurationInDays = (ev) => {
        setDurationInDays(ev.target.value)
    }

    //--  --//
    const createTrip = () => {
        const body = {
            name: name,
            planet: planet,
            date: dateInBr,
            description: description,
            durationInDays: durationInDays
        }
        axios
            .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/sergio-dias-shaw/trips", body, header)
            .then((res) => {
                alert('Trip has been created')
                setDate("")
                setName("")
                setPlanet("")
                setDescription("")
                setDurationInDays(0)
            })
            .catch((err) => {
                console.log(err.response);
            })
    }

    return (
        <FlexContainerCreateTrip>
            <h4>
                Criar viagem
            </h4>
            <input
                placeholder='Name'
                required
                type="text"
                value={name}
                onChange={onChangeName}
            />
            <select value={planet} onChange={onChangePlanet}>
                <option value="Escolha um planeta">Escolha um planeta</option>
                <option value="Marte">Marte</option>
                <option value="Mercúrio">Mercúrio</option>
                <option value="Vênus">Vênus</option>
                <option value="Terra">Terra</option>
                <option value="Júpiter">Júpiter</option>
                <option value="Saturno">Saturno</option>
                <option value="Urano">Urano</option>
                <option value="Netuno">Netuno</option>
            </select>
            <input
                required
                type="date"
                value={date}
                onChange={onChangeDate}
            />
            <input
                onChange={onChangeDescription}
                type="text"
                value={description}
                placeholder="Description"
            />
            <input
                required
                type="number"
                value={durationInDays}
                placeholder='Duration'
                onChange={onChangeDurationInDays}
            />
            <div>
                <button onClick={() => goBackPage(navigate)}>Voltar</button>
                <button onClick={createTrip}>Enviar</button>
            </div>
        </FlexContainerCreateTrip>
    )
}