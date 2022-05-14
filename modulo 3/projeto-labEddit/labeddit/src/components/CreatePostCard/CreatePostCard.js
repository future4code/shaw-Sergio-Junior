import React, { useContext } from "react"
import { useForm } from "../../hooks/useForm"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { BASE_URL } from "../../constants/Constants"
import axios from "axios";
import { headers } from "../../constants/Constants"
import { GlobalContext } from "../../global/GlobalContext";
import CardContent from '@mui/material/CardContent';
import { CardCreatePost, CardCreatePostButton } from "./styled";

export default function CreatePostCard() {
    const { setters, states } = useContext(GlobalContext)
    const { form, onChange, clearFields } = useForm({ title: "", body: "" })

    const createPost = () => {
        axios
            .post(`${BASE_URL}/posts`, form, headers)
            .then((res) => {
                alert("Post was created!");
                clearFields()
                setters.setCount(states.count + 1)
            })
            .catch((err) => {
                console.log(err.response);
            })
    }

    const onSubmitForm = (ev) => {
        ev.preventDefault()
        createPost()
    }

    return (
        <CardCreatePost sx={{ minWidth: 275 }}>
            <form onSubmit={onSubmitForm}>
                <CardCreatePostButton>
                    <TextField
                        label="Title"
                        variant="standard"
                        name={"title"}
                        value={form.title}
                        onChange={onChange}
                        required
                    />
                </CardCreatePostButton>
                <CardCreatePostButton>
                    <TextField
                        size="large"
                        type="text"
                        label="Post"
                        variant="outlined"
                        name={"body"}
                        value={form.body}
                        onChange={onChange}
                        required
                    />
                </CardCreatePostButton>
                <CardCreatePostButton>
                    <Button
                        type={"submit"}
                        variant="contained"
                    >
                        Create post
                    </Button>
                </CardCreatePostButton>
            </form>
        </CardCreatePost >
    )
}