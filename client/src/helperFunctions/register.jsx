
import { registerSFailure, registerStart, registerSuccess } from "../store/slices/userSlice"
import { publicRequest } from "../requestMethods"

export const register = async(dispatch,formData) => {
    dispatch(registerStart())
    try{
        const res = await publicRequest.post(`/auth/register`,formData)
        console.log(formData)
        dispatch(registerSuccess(res.data))
    }catch(e){
        dispatch(registerSFailure())
    }
}

