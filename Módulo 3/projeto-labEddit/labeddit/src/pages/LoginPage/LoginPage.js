import React from "react"
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import { goToSignUpPage } from "../../routes/coordinator";
import LoginForm from "./LoginForm";
import CssBaseline from '@mui/material/CssBaseline';
import { ContainerLoading, ContainerImgLogin } from "./styled"
import labenu from "../../assets/labenu.gif"

export default function LoginPage() {
    const navigate = useNavigate()

    return (
        <React.Fragment >
            <CssBaseline />
            <ContainerImgLogin >
                <img src={labenu}/>
                Welcome to the top!
            </ContainerImgLogin>
            <ContainerLoading>
                <LoginForm />
            </ContainerLoading>
            <ContainerLoading>
                <Button
                    onClick={() => goToSignUpPage(navigate)}
                    variant="text"
                >
                    Create account
                </Button>
            </ContainerLoading>
        </React.Fragment>
    )
}