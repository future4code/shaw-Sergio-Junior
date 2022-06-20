export const BASE_URL = "https://labeddit.herokuapp.com"

export const token = localStorage.getItem("token")

export const headers = { headers: { Authorization: token } }

