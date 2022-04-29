export const token = localStorage.getItem("token")

export const header = {
    headers: {
        auth: token
    }
}

