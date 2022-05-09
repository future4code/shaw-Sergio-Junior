import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'

export const UseProtectedPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (token === null) {
            alert("Faça login para acessar!");
            navigate("/login")
        }
    }, [])
}