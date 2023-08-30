import { useEffect, useState } from "react"
import { userRequest } from "../requestMethods"


export const useFetchSongs = () =>{

    const [songs,setSongs] = useState([])
    const fetchSongs = async() =>{
        const {data} = await userRequest.get(`/song/get/allSongs`)
        // console.log(data?.song)
        setSongs(data?.song)
      }
    
      useEffect(()=>{
        fetchSongs()
      },[songs,setSongs])

      return songs
}