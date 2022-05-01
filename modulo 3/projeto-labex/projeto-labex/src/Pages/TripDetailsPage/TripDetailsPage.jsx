import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from "axios";
import { UseProtectedPage } from "../../Hooks/UseProtectedPage";
import { goBackPage } from "../../Routes/Coordinator"
import { header, baseUrl, loadingUrl } from "../../Constants/constants"
import { DivContainerMain, ContainerInfoCandidates, ContainerPCadidates, ContainerInfoTripCandidate } from './index'




export default function TripDetailsPage(props) {
    const navigate = useNavigate()
    UseProtectedPage()


    //-- STATE --//
    const [tripDetails, setTripDetails] = useState([])
    const [candidates, setCandidates] = useState([])
    const [approvedCandidates, setApprovedCandidates] = useState([])

    //-- DID MOUNT AND UPDATE --//
    useEffect(() => {
        getTripDetail()
    }, [candidates])

    //-- AXIOS PARA PEGAR DETALHES E SETAR NO STATE  --//
    const getTripDetail = () => {
        axios
            .get(`${baseUrl}trip/${props.tripId}`, header)
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
            .put(`${baseUrl}trips/${tripId}/candidates/${candidateId}/decide`, body, header)
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
            <ContainerInfoCandidates key={candidate.id}>
                <ContainerPCadidates>
                    <p><span>Nome:</span> {candidate.name}</p>
                    <p><span>Profissão:</span> {candidate.profession}</p>
                    <p><span>Idade:</span> {candidate.age}</p>
                    <p><span>País:</span> {candidate.country}</p>
                    <p><span>Texto da candidatura:</span> {candidate.applicationText}</p>
                </ContainerPCadidates>
                <div>
                    <button onClick={() => decideCandidate(props.tripId, candidate.id, true)}>Aprovar</button>
                    <button onClick={() => decideCandidate(props.tripId, candidate.id, false)}>Reprovar</button>
                </div>
            </ContainerInfoCandidates>

        )
    })

    return (
        <DivContainerMain>
            {tripDetails.name ?
                <>
                    <ContainerInfoTripCandidate>
                        <h1>
                            {tripDetails.name}
                        </h1>
                        <p><span>Nome:</span> {tripDetails.name}</p>
                        <p><span>Descrição:</span> {tripDetails.description}</p>
                        <p><span>Planeta:</span> {tripDetails.planet}</p>
                        <p><span>Duração:</span> {tripDetails.durationInDays} Dias</p>
                        <p><span>Data:</span> {tripDetails.date}</p>

                    </ContainerInfoTripCandidate>

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
                </>
                :
                <img src={loadingUrl} />}
        </DivContainerMain>
    )
}