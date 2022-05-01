export const token = localStorage.getItem("token")

export const header = {
    headers: {
        auth: token
    }
}

export const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/sergio-dias-shaw/"