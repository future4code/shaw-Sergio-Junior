import React from "react"
import { useForm } from "../../hooks/useForm"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { BASE_URL } from "../../constants/Constants"
import axios from "axios";
import { headers } from "../../constants/Constants"

export default function CreatePostCard() {

    const { form, onChange, clearFields } = useForm({ title: "", body: "" })

    const createPost = () => {
        axios
            .post(`${BASE_URL}/posts`, form, headers)
            .then((res) => {
                alert("Post was created!");
                clearFields()
            })
            .catch((err) => {
                console.log(err.response);
            })
    }

    const onSubmitForm = (ev) => {
        createPost()
        ev.preventDefault()
    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <TextField
                    pattern={"^.{3,}"}
                    title={"Title must have at least 3 characters"}
                    label="Title"
                    variant="standard"
                    name={"title"}
                    value={form.title}
                    onChange={onChange}
                    required
                />
                <TextField
                    label="Post"
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
                    Create post
                </Button>
            </form>
        </div>
    )
}