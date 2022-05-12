import React, { useState } from 'react'
import { GlobalContext } from './GlobalContext'
import axios from 'axios'
import { BASE_URL, headers, token } from '../constants/Constants'
import { useForm } from "../hooks/useForm"
import { goToLogin, goToPostListPage } from "../routes/coordinator"
import useRequestData from '../hooks/useRequestData'




export default function GlobalState(props) {
    const { clearFields } = useForm()

    //-- estados --//
    const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")
    const [count, setCount] = useState(0)
    const [posts] = useRequestData(`${BASE_URL}/posts`, count)
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
    const states = { rightButtonText, posts, count }
    const setters = { setRightButtonText, setCount }
    const functions = { rightButtonAction }
    const requests = { createUser, login }
    return (
        <GlobalContext.Provider value={{ requests, states, setters, functions }} >
            {props.children}
        </GlobalContext.Provider>
    )
}
