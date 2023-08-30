import { userRequest } from "../requestMethods"

export const fetchSong = async(songId) =>{
    let song;
    const fetchSongInner = async() =>{
        const {data} = await userRequest.get(`/song/get/song/${songId}`)
        song=data?.song;
        return song;
        // console.log(data?.song)
      }
    
      const songData = await fetchSongInner()
      return songData

}