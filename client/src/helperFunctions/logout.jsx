import { logoutSuccess } from "../store/slices/userSlice"

function deleteCookie() {
    document.cookie = `token="";`;
}

export const logout = (dispatch) =>{
    deleteCookie()
    dispatch(logoutSuccess())
}