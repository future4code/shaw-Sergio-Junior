import React from "react"
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import { goToSignUpPage } from "../../routes/coordinator";
import LoginForm from "./LoginForm";


export default function LoginPage() {
    const navigate = useNavigate()

    return (
        <div>
            <div>
                <b> LoginPage - vai a logo</b>
            </div>
            <LoginForm />
            <div>
                <Button
                    onClick={() => goToSignUpPage(navigate)}
                    variant="text"
                >
                    Create account
                </Button>
            </div>
        </div>
    )
}