export const token = localStorage.getItem("token")

export const header = {
    headers: {
        auth: token
    }
}

export const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/sergio-dias-shaw/"

export const loadingUrl = "https://cdn.dribbble.com/users/40316/screenshots/821525/media/6055b5517f892a1df37c0a2e11fda519.gif"