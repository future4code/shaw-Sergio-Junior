import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const UseProtectedPage = () => {
    const navigate = useNavigate()

    useLayoutEffect(() => {
        const token = localStorage.getItem("token")

        if (token === null) {
            navigate("/Login")
            alert("Please, logIn to have access")
        }
    }, [])
}