import React from "react"
import { UseProtectedPage } from "../../hooks/useProtectedPage"

export default function PostListPage() {
    UseProtectedPage()
    return (
        <div>
            <h1>
                PostListPage
                <button>botão</button>
            </h1>
        </div>
    )
}