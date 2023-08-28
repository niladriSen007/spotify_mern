import React from 'react'
import Leftbar from '../components/Leftbar/Leftbar'
import Rightbar from '../components/Rightbar/Rightbar'

const Home = () => {
  return (
    <div className='flex bg-black text-gray-400 gap-2'>
        <Leftbar />
        <Rightbar />
    </div>
  )
}

export default Home