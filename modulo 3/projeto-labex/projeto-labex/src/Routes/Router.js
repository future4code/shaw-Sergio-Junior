import AdminHomePage from "../Pages/AdminHomePage/AdminHomePage"
import ApplicationFormPage from "../Pages/ApplicationFormPage/ApplicationFormPage"
import CreateTripPage from "../Pages/CreateTripPage/CreateTripPage"
import HomePage from "../Pages/HomePage/HomePage"
import ListTripsPage from "../Pages/ListTripsPage/ListTripsPage"
import LoginPage from "../Pages/LoginPage/LoginPage"
import TripDetailsPage from "../Pages/TripDetailsPage/TripDetailsPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/trips/list" element={<ListTripsPage />} />
                <Route path="/trips/application" element={<ApplicationFormPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/admin/trips/list" element={<TripDetailsPage />} />
                <Route path="/admin/trips/create" element={<CreateTripPage />} />
                <Route path="/admin/trips/:id" element={<AdminHomePage />} />
            </Routes>
        </BrowserRouter>
    )
}