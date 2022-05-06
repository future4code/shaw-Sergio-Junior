import { DivContainerMain } from "./index"
import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { goBackPage, setTokenAndGoToAdminHome } from '../../Routes/Coordinator'
import { baseUrl } from "../../Constants/constants";
import { useForm } from "../../Hooks/useForm"


export default function LoginPage() {
    const navigate = useNavigate()

    //-- STATE --/
    const { form, onChange, cleanFields } = useForm({ email: "", password: "" })

    //-- BOTÃO ENTRAR E SETAR TOKEN DO USUARIO --//
    const onSubmitLogin = (event) => {
        event.preventDefault()
        axios
            .post(
                `${baseUrl}login`, form
            )
            .then((res) => {
                setTokenAndGoToAdminHome(res, navigate)
                cleanFields()
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    return (
        <DivContainerMain>

            <h1>
                Login
            </h1>

            <form onSubmit={onSubmitLogin}>
                <input
                    value={form.email}
                    name={"email"}
                    placeholder="Digite seu email"
                    type="email"
                    onChange={onChange}
                    
                />
                <input
                    value={form.password}
                    name={"password"}
                    placeholder="Digite sua senha"
                    type="password"
                    onChange={onChange}
                    pattern={"^.{6,}"}
                    title={"A senha deve ter no mínimo 6 letras ou números"}
                />

                <button onClick={() => goBackPage(navigate)}>Voltar</button>
                <button>Entrar</button>
            </form>

        </DivContainerMain>
    )
}