import { FlexContainerApplicationForm } from "./index"
import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import axios from 'axios';
import dataJson from '../../json/paises-array.json'
import { goBackPage } from '../../Routes/Coordinator'
import { useForm } from "../../Hooks/useForm"
import { baseUrl } from '../../Constants/constants'

export default function ApplicationFormPage(props) {
    const navigate = useNavigate()

    //-- STATE --/
    const { form, onChange, cleanFields } = useForm({
        name: "", age: "", applicationText: "", profession: "", country: "", idTrip: ""
    })

    //-- DID MOUNT - DID UPDATE --//
    useEffect(() => {
        props.getTripsList()
    }, [props.tripList])

    //-- MAP PARA RENDERIZAR NO SELECT DE VIAGENS --//
    const tripsNames = props.tripList.map((tripName) => {
        return (
            <option key={tripName.id} value={tripName.id}> {tripName.name} </option >
        )
    })

    const idTrip = form.idTrip
    //-- AXIOS DE APLICAR PARA VIAGEM --//
    const applyToTrip = (event) => {
        event.preventDefault()
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country,
        }
        axios
            .post(`${baseUrl}trips/${idTrip}/apply`, body)
            .then((res) => {
                alert(res.data.message)
                cleanFields()
            })
            .catch((err) => {
                alert("Please, fill all the parameters");
            })
    }

    //-- MAP DOS PAISES VINDOS DO JSON --//
    const paises = dataJson.map((pais) => {
        return (
            <option key={pais.ordem} value={pais.nome}>{pais.nome}</option>
        )
    })
    return (
        <FlexContainerApplicationForm>
            <h4>
                Inscreva-se para uma viagem
            </h4>
            <form onSubmit={applyToTrip}>
                <select
                    name={"idTrip"}
                    value={form.idTrip}
                    onChange={onChange}
                >
                    <option>Escolha uma viagem</option>
                    {tripsNames}
                </select>
                <input
                    required
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    placeholder="Name"
                    pattern={"^.{3,}"}
                    title={"O nome deve ter no mínimo 3 letras"}
                />
                <input
                    name={"age"}
                    required
                    type="number"
                    placeholder="Age"
                    value={form.age}
                    onChange={onChange}
                    min={18}
                    max={200}
                />
                <input
                    name={"applicationText"}
                    required
                    type="text"
                    placeholder='Application text'
                    value={form.applicationText}
                    onChange={onChange}
                    pattern={"^.{10,}"}
                    title={"O texto deve ter no mínimo 10 letras"}
                />
                <input
                    name={"profession"}
                    required
                    type="text"
                    placeholder="Job"
                    value={form.profession}
                    onChange={onChange}
                    pattern={"^.{5,}"}
                    title={"A profissão deve ter no mínimo 5 letras"}
                />
                <select
                    name={"country"}
                    value={form.country}
                    onChange={onChange}
                >
                    <option value="Escolha um país">Escolha um país</option>
                    {paises}
                </select>
                <div>
                    <button onClick={() => goBackPage(navigate)}>Voltar</button>
                    <button>Enviar</button>
                </div>
            </form>
        </FlexContainerApplicationForm>
    )
}