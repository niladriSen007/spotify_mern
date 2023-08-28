import { useEffect, useState } from "react"
import { userRequest } from "../requestMethods"

export const usePlaylist = () =>{
    const [playlist,setPlaylist] = useState([])
    const fetchPlayList = async() =>{
      const user = localStorage.getItem("localUser").split('"')[1]
      console.log(user)
        const res = await userRequest.get(`/playlist/userPlaylist/${user}`)
        // console.log(res?.data?.playlist)
        setPlaylist(res?.data?.playlist)
      }

    //   console.log(playlist)
    
      useEffect(()=>{
        fetchPlayList()
      },[])

      return {playlist,setPlaylist}
}