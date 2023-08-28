
import { loginSFailure, loginStart, loginSuccess } from "../store/slices/userSlice"
import { publicRequest } from "../requestMethods"

export const login = async(dispatch,formData) => {
    dispatch(loginStart())
    try{
        const res = await publicRequest.post(`/auth/login`,formData)
        console.log(formData)
        dispatch(loginSuccess(res.data))
    }catch(e){
        dispatch(loginSFailure())
    }
}

