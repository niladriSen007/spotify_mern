import { useEffect, useState } from "react"
import { userRequest } from "../requestMethods"

export const usePlaylist = () =>{
    const [playlist,setPlaylist] = useState([])
    const fetchPlayList = async() =>{
        const res = await userRequest.get(`/playlist/user/allPlaylist`)
        // console.log(res?.data?.playlist)
        setPlaylist(res?.data?.playlist)
      }

    //   console.log(playlist)
    
      useEffect(()=>{
        fetchPlayList()
      },[])

      return {playlist,setPlaylist}
}