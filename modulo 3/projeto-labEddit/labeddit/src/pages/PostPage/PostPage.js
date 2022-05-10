import React from "react"
import { UseProtectedPage } from "../../hooks/useProtectedPage"



export default function PostPage() {
    UseProtectedPage()
    return (
        <div>
            <h1>
                PostPage
                <button>botão</button>
            </h1>
        </div>
    )
}