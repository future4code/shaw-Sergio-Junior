import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { useState, useEffect } from 'react'
import axios from "axios";
import { UseProtectedPage } from "../../Hooks/UseProtectedPage";



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
    const [tripDetails, setTripDetails] = useState({})
    const [candidates, setCandidates] = useState([])
    const [approvedCandidates, setApprovedCandidates] = useState([])

    UseProtectedPage()
    useEffect(() => {
        getTripDetail(props.tripId)
    }, [])
    const goBackPage = () => {
        navigate(-1)
    }


    const getTripDetail = (tripId) => {
        const token = localStorage.getItem("token")
        const headers = {
            headers: {
                auth: token
            }
        }
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/sergio-dias-shaw/trip/${tripId}`, headers)
            .then((res) => {
                setTripDetails(res.data.trip)
                setCandidates(res.data.trip.candidates)
                setApprovedCandidates(res.data.trip.approved)
            })
            .catch((err) => {
                console.log("Deu erro: ", err.response)
            })
    }



    const approved = approvedCandidates.map((candidate) => {
        return (
            <li>{candidate.name}</li>
        )
    })

    const candidatos = candidates.map((candidate) => {
        return (
            <div>
                <div>
                    <p><strong>Nome: {candidate.name}</strong></p>
                    <p><strong>Profissão: {candidate.profession}</strong></p>
                    <p><strong>Idade: {candidate.age}</strong></p>
                    <p><strong>País: {candidate.country}</strong></p>
                    <p><strong>Texto da candidatura: {candidate.applicationText}</strong></p>
                </div>
                <button>Aprovar</button>
                <button>Reprovar</button>
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
                    <br />
                    Planeta: {tripDetails.planet}
                    Duração: {tripDetails.durationInDays} Dias
                    Data: {tripDetails.date}
                </p>
            </div>

            <button onClick={goBackPage}>Voltar</button>

            <div>
                <h4>Candidatos Pendentes</h4>
                {candidatos}
            </div>

            <h4>Candidatos Aprovados</h4>
            <ul>
                {approved}
            </ul>
        </DivContainerMain>
    )
}