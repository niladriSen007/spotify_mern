
import LogoContainer from './LogoContainer'

const Navbar = () => {
  return (
    <div className=' overflow-x-hidden bg-black flex items-center justify-between pr-16 '>
        <LogoContainer />
        <nav className='text-white flex list-none gap-4 text-lg items-center justify-between'>
            <li>Premium</li>
            <li>Support</li>
            <button className=' px-2 py-1 rounded-full'>Download</button>
           <span className='text-xl'> {"|"}</span>
            <button className=' bg-green-500 hover:bg-green-600 transition-all duration-300 px-2 py-1 rounded-full'>Register</button>
            <button className=' border-2 border-white px-2  rounded-full'>Login</button>
        </nav>
    </div>
  )
}

export default Navbar