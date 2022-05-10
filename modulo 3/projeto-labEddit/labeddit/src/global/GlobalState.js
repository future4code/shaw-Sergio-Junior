import React, { useState } from 'react'
import { GlobalContext } from './GlobalContext'
import axios from 'axios'
import { BASE_URL } from '../constants/Constants'
import { useForm } from "../hooks/useForm"
import { goToLogin, goToPostListPage } from "../routes/coordinator"




export default function GlobalState(props) {
    const { clearFields } = useForm()
    const token = localStorage.getItem("token")

    //-- estados --//
    const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

    //-- functions --//
    const logout = () => {
        localStorage.removeItem("token")
    }
    const rightButtonAction = (navigate) => {
        if (token) {
            logout()
            setRightButtonText("Login")
            goToLogin(navigate)
        } else {
            goToLogin(navigate)
        }
    }

    //-- Requests --//
    const login = async (navigate, form) => {
        await axios
            .post(`${BASE_URL}/users/login`, form)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                clearFields()
                alert("Welcome to LabEddit, Baby!")
                goToPostListPage(navigate)
            })
            .catch((err) => {
                alert(`Invalid password or email`)
                clearFields()
            })
    }
    const createUser = async (navigate, form) => {
        await axios
            .post(`${BASE_URL}/users/signup`, form)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                clearFields()
                alert("User has been created! You aren't a robot")
                goToPostListPage(navigate)
            })
            .catch((err) => {
                alert("Email or password invalid")
                clearFields()
            })
    }

    //-- Organização dos objetos --//
    const states = { rightButtonText }
    const setters = { setRightButtonText }
    const functions = { rightButtonAction }
    const requests = { createUser, login }
    return (
        <GlobalContext.Provider value={{ requests, states, setters, functions }} >
            {props.children}
        </GlobalContext.Provider>
    )
}
