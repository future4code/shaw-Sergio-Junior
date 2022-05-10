export const goToLogin = (navigate) => {
    navigate("/Login")
}
export const goToPostListPage = (navigate) => {
    navigate("/")
}
export const goToPostPage = (navigate, id) => {
    navigate(`/Post/${id}`)
}
export const goToSignUpPage = (navigate) => {
    navigate("/SignUp")
}
// export const goBackPage = (navigate) => {
//     navigate(-1)
// }