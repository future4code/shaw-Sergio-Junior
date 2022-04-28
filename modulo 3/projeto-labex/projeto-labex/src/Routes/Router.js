import AdminHomePage from "../Pages/AdminHomePage/AdminHomePage"
import ApplicationFormPage from "../Pages/ApplicationFormPage/ApplicationFormPage"
import CreateTripPage from "../Pages/CreateTripPage/CreateTripPage"
import HomePage from "../Pages/HomePage/HomePage"
import ListTripsPage from "../Pages/ListTripsPage/ListTripsPage"
import LoginPage from "../Pages/LoginPage/LoginPage"
import TripDetailsPage from "../Pages/TripDetailsPage/TripDetailsPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import axios from "axios"

export const Router = (props) => {
    const [tripId, setTripId] = useState("")
    const [tripList, setTripList] = useState([])



    const getTripsList = () => {
        axios
            .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/sergio-dias-shaw/trips")
            .then((res) => {
                setTripList(res.data.trips)
            })
            .catch((err) => {
                console.log(err.response);
            })
    }


    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/trips/list"
                    element={
                        <ListTripsPage
                            getTripsList={getTripsList}
                            tripList={tripList}
                            setTripList={setTripList}
                        />}
                />
                <Route path="/trips/application" element={
                    <ApplicationFormPage
                        getTripsList={getTripsList}
                        tripList={tripList}
                    />}
                />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin/trips/:id" element={
                    <TripDetailsPage
                        tripId={tripId}
                    />}
                />
                <Route path="/admin/trips/create" element={<CreateTripPage />} />
                <Route path="/admin/trips/list" element={
                    <AdminHomePage
                        getTripsList={getTripsList}
                        tripList={tripList}
                        setTripId={setTripId}
                    />}
                />
            </Routes>
        </BrowserRouter>
    )
}