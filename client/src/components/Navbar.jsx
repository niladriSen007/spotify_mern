import { Link } from "react-router-dom";
import LogoContainer from "./LogoContainer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../helperFunctions/logout";

const Navbar = () => {
  const selector = useSelector((state) => state.user);
  const userName = selector?.currentUser?.user?.userName;

  const dispatch = useDispatch()


  const handleLogout = (e) =>{
    e.preventDefault();
    logout(dispatch)
  }

  return (
    <div className=" overflow-x-hidden bg-black flex items-center justify-between h-16 pr-16 sticky top-0 ">
      <LogoContainer />
      <nav className="text-white flex list-none gap-6 text-lg items-center justify-between">
        <li>Premium</li>
        <li>Support</li>
        <button className=" px-2 py-1 rounded-full">Download</button>
        <span className="text-xl"> {"|"}</span>
        {userName && <li className="text-green-500"> {userName}</li>}
        {!userName && (
          <button className=" bg-green-500 hover:bg-green-600 transition-all duration-300 px-2 py-1 rounded-full">
            <Link to={"/register"}>Register</Link>
          </button>
        )}
        {userName ? (
          <button className=" border-2 border-white px-2  rounded-full" onClick={(e)=>handleLogout(e)}>
            <Link to={"/login"}>Logout</Link>
          </button>
        ) : (
          <button className=" border-2 border-white px-2  rounded-full">
            <Link to={"/login"}>Login</Link>
          </button>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
