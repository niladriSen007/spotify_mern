import { userRequest } from "../requestMethods"

export const postSong = async(songDetails) =>{
    const res = await userRequest.post(`/song/create`,songDetails)
    console.log(res?.data)
  }