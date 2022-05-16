import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import PostListPage from "../pages/PostListPage/PostListPage"
import PostPage from "../pages/PostPage/PostPage"
import SignUpPage from "../pages/SignUpPage/SignUpPage"
import { Header } from "../components/Header/Header"

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/Login" element={<LoginPage />} />
                <Route index element={<PostListPage />} />
                <Route path="/SignUp" element={<SignUpPage />} />
                <Route path="/Post/:id" element={<PostPage />} />
            </Routes>
        </BrowserRouter>
    )
}