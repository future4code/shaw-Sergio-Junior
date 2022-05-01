import { FlexContainerCreateTrip } from './index'
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import { UseProtectedPage } from "../../Hooks/UseProtectedPage";
import axios from 'axios';
import { goBackPage } from "../../Routes/Coordinator"
import { header, baseUrl } from '../../Constants/constants'
import { useForm } from "../../Hooks/useForm"


export default function CreateTripPage() {
    const navigate = useNavigate()
    UseProtectedPage()

    //-- STATE --//
    const { form, onChange, cleanFields } = useForm({
        name: "", planet: "", date: [], description: "", durationInDays: 0
    })

    //-- CONVERSAO DA DATA PARA FORMATO BR --//
    const convertedDate = new Date(form.date)
    const dateInBr = convertedDate.getDate() + "/" + (convertedDate.getMonth() + 1) + "/" + convertedDate.getFullYear()

    console.log(dateInBr)
    //-- USANDO O AXIOS DE CREATE TRIP --//
    const createTrip = (event) => {
        event.preventDefault()
        const body = {
            name: form.name,
            planet: form.planet, 
            date: dateInBr, 
            description: form.description, 
            durationInDays: form.durationInDays
        }
        axios
            .post(`${baseUrl}trips`, body, header)
            .then((res) => {
                alert("Trip has been created!!! congrats")
                cleanFields()
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
            <form onSubmit={createTrip}>
                <input
                    pattern={"^.{8,}"}
                    title={"Trip needs at least 8 characters"}
                    placeholder='Name'
                    required
                    type="text"
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                />
                <select
                    name={"planet"}
                    value={form.planet}
                    onChange={onChange}
                >
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
                    name={"date"}
                    required
                    type="date"
                    value={form.date}
                    onChange={onChange}
                />
                <input
                    name={"description"}
                    onChange={onChange}
                    value={form.description}
                    placeholder="Description"
                    pattern={"^.{5,}"}
                    title={"Description needs at least 5 characters"}
                />
                <input
                    name={"durationInDays"}
                    required
                    type="number"
                    min={0}
                    value={form.durationInDays}
                    placeholder='Duration'
                    onChange={onChange}
                />
                <div>
                    <button onClick={() => goBackPage(navigate)}>Voltar</button>
                    <button>Enviar</button>
                </div>
            </form>
        </FlexContainerCreateTrip>
    )
}