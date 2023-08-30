import { useEffect, useState } from "react"
import { userRequest } from "../requestMethods"


export const useFetchSong = (songId) =>{

    const [song,setSong] = useState([])
    const fetchSong = async() =>{
        const {data} = await userRequest.get(`/song/get/song/${songId}`)
        // console.log(data?.song)
        setSong(data?.song)
      }
    
      useEffect(()=>{
        fetchSong()
      },[])

      return song
}