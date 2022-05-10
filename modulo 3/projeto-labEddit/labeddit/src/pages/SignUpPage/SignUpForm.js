import React, { useContext } from "react"
import { useForm } from "../../hooks/useForm"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from "react-router-dom"
import { goToPostListPage } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/Constants"
import axios from "axios";
import { GlobalContext } from '../../global/GlobalContext';


export default function SignUpForm() {
    const navigate = useNavigate()
    const { form, onChange, clearFields } = useForm({ username: "", email: "", password: "" })
    const { setters } = useContext(GlobalContext)

    const createUser = () => {
        axios
            .post(`${BASE_URL}/users/signup`, form)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                clearFields()
                alert("User has been created! You aren't a robot")
                goToPostListPage(navigate)
                setters.setRightButtonText("Logout")
            })
            .catch((err) => {
                alert("Email or password invalid")
                clearFields()
            })
    }

    const onSubmitForm = (ev) => {
        createUser()
        ev.preventDefault()
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <TextField
                    pattern={"^.{3,}"}
                    title={"Username must have at least 3 characters"}
                    label="Username"
                    variant="standard"
                    name={"username"}
                    value={form.username}
                    onChange={onChange}
                    required
                />
                <TextField
                    type="email"
                    label="Email"
                    variant="standard"
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                <TextField
                    pattern={"^.{8, 30}"}
                    title={"Password must have between 8 and 30 characters"}
                    type="password"
                    label="Password"
                    variant="standard"
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    required
                />
                <div>
                    <p>
                        Ao continuar, você concorda com o nosso <a href="#">Contrato de usuário</a> e nossa <a href="#">Política de privacidade</a>
                    </p>
                    <p>
                        <Checkbox />
                        Eu concordo em receber coisas legais do LabEddit por email!
                    </p>
                </div>
                <Button
                    type={"submit"}
                    variant="contained"
                >
                    Create account
                </Button>
            </form>
        </div>
    )
}