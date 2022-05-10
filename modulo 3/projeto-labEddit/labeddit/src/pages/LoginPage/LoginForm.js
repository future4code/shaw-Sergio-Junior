import React, {useContext} from "react"
import { useForm } from "../../hooks/useForm"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import { BASE_URL } from "../../constants/Constants"
import { useNavigate } from "react-router-dom";
import { goToPostListPage } from "../../routes/coordinator";
import { GlobalContext } from '../../global/GlobalContext';

export default function LoginForm() {
    const navigate = useNavigate()
    const { form, onChange, clearFields } = useForm({ email: "", password: "" })
    const { setters } = useContext(GlobalContext)

    const login = () => {
        axios
            .post(`${BASE_URL}/users/login`, form)
            .then((res) => {
                localStorage.setItem("token", res.data.token)
                clearFields()
                alert("Welcome to LabEddit, Baby!")
                goToPostListPage(navigate)
                setters.setRightButtonText("Logout")
            })
            .catch((err) => {
                alert(`Invalid password or email`)
                clearFields()
            })
    }

    const onSubmitForm = (ev) => {
        ev.preventDefault()
        login()
    }


    return (
        <div>
            <form onSubmit={onSubmitForm}>
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
                    type="password"
                    label="Password"
                    variant="standard"
                    name={"password"}
                    value={form.password}
                    onChange={onChange}
                    required
                />
                <Button
                    type={"submit"}
                    variant="contained"
                >
                    Login
                </Button>
            </form>
        </div>
    )
}