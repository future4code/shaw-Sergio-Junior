import React, { useContext } from "react";
import { useForm } from "../../hooks/useForm"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { BASE_URL } from "../../constants/Constants"
import axios from "axios";
import { headers } from "../../constants/Constants"
import { GlobalContext } from "../../global/GlobalContext";

export default function CreateComment(props) {
    const { setters, states } = useContext(GlobalContext)
    const { form, onChange, clearFields } = useForm({ body: "" })

    const createComment = (id) => {
        axios
            .post(`${BASE_URL}/posts/${id}/comments`, form, headers)
            .then((res) => {
                alert("Comment was sent!");
                clearFields()
                setters.setCount(states.count + 1)
            })
            .catch((err) => {
                console.log(err.response.data);
            })
    }

    const onSubmitForm = (ev) => {
        createComment(props.id)
        ev.preventDefault()
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <TextField
                    label="Comment"
                    variant="standard"
                    name={"body"}
                    value={form.body}
                    onChange={onChange}
                    required
                />
                <Button
                    type={"submit"}
                    variant="contained"
                >
                    Send
                </Button>
            </form>
        </div>
    )
}