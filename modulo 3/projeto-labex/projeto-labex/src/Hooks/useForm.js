import { useState } from "react";

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChange = (ev) => {
        const { name, value } = ev.target
        setForm({ ...form, [name]: value })
    }

    const cleanFields = () => {
        setForm(initialState)
    }

    return { form, onChange, cleanFields }
}