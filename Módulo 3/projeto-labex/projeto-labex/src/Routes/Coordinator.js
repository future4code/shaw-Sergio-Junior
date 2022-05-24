export const goBackPage = (navigate) => {
    navigate(-1)
}

export const goToCreateTripPage = (navigate) => {
    navigate("/admin/trips/create")
}

export const onClickLogOut = (navigate) => {
    localStorage.clear()
    navigate("/")
}

export const goToListTripPage = (navigate) => {
    navigate("/trips/list")
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToApplicationFormPage = (navigate) => {
    navigate("/trips/application")
}

export const setTokenAndGoToAdminHome = (res, navigate) => {
    localStorage.setItem("token", res.data.token)
    navigate("/admin/trips/list")
}