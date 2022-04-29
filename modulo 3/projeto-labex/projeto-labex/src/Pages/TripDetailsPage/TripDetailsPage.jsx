import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { useState, useEffect } from 'react'
import axios from "axios";
import { UseProtectedPage } from "../../Hooks/UseProtectedPage";
import { goBackPage } from "../../Routes/Coordinator"
import { header } from "../../Constants/constants"


const DivContainerMain = styled.div`
        display: flex;
    flex-direction: column;
    width: 10vw;
    margin: 1rem auto;
    gap: 0.5rem;
    input { 
        border-radius: 10px;
        padding: 0.5rem;
    }
`

export default function TripDetailsPage(props) {
    const navigate = useNavigate()
    UseProtectedPage()


    //-- STATE --//
    const [tripDetails, setTripDetails] = useState({})
    const [candidates, setCandidates] = useState([])
    const [approvedCandidates, setApprovedCandidates] = useState([])

    //-- DID MOUNT AND UPDATE --//
    useEffect(() => {
        getTripDetail(props.tripId)
    }, [candidates])

    //-- AXIOS PARA PEGAR DETALHES E SETAR NO STATE  --//
    const getTripDetail = (tripId) => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/sergio-dias-shaw/trip/${tripId}`, header)
            .then((res) => {
                setTripDetails(res.data.trip)
                setCandidates(res.data.trip.candidates)
                setApprovedCandidates(res.data.trip.approved)
            })
            .catch((err) => {
                console.log("Deu erro: ", err.response)
            })
    }

    //-- AXIOS PARA APROVAR OU REPROVAR CANDIDATOS A VIAGENS --//
    const decideCandidate = (tripId, candidateId, boolean) => {
        const body = {
            "approve": boolean
        }
        axios
            .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/sergio-dias-shaw/trips/${tripId}/candidates/${candidateId}/decide`, body, header)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.response);
            })
    }

    //-- MAP DA ARRAY DE CANDIDATOS APROVADOS (SOMENTE NOME) --//
    const approved = approvedCandidates.map((candidate) => {
        return (
            <li key={candidate.id}>{candidate.name}</li>
        )
    })

    //-- MAP DO ARRAY DE CANDIDATOS PENDENTES --//
    const candidatos = candidates.map((candidate) => {
        return (
            <div key={candidate.id}>
                <div>
                    <p><strong>Nome: {candidate.name}</strong></p>
                    <p><strong>Profissão: {candidate.profession}</strong></p>
                    <p><strong>Idade: {candidate.age}</strong></p>
                    <p><strong>País: {candidate.country}</strong></p>
                    <p><strong>Texto da candidatura: {candidate.applicationText}</strong></p>
                </div>
                <button onClick={() => decideCandidate(props.tripId, candidate.id, true)}>Aprovar</button>
                <button onClick={() => decideCandidate(props.tripId, candidate.id, false)}>Reprovar</button>
            </div>

        )
    })

    return (
        <DivContainerMain>
            <div>
                <h1>
                    {tripDetails.name}
                </h1>
                <p>
                    Nome: {tripDetails.name}
                    Descrição: {tripDetails.description}
                    Planeta: {tripDetails.planet}
                    Duração: {tripDetails.durationInDays} Dias
                    Data: {tripDetails.date}
                </p>
            </div>

            <button onClick={() => goBackPage(navigate)}>Voltar</button>

            <div>
                <h4>Candidatos Pendentes</h4>
                <div>
                    {candidatos}
                </div>
            </div>
            <div>
                <h4>Candidatos Aprovados</h4>
                <ul>
                    {approved}
                </ul>
            </div>
        </DivContainerMain>
    )
}