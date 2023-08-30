import { createBrowserRouter, RouterProvider, Outlet,Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import SingleSongPage from "./pages/SingleSongPage";
import Navbar from "./components/Navbar";

const App = () => {

  const selector = useSelector(state=>state.user)

  // const Layout = () => (
  //   <div>
  //     <Navbar />
  //     <div style={{ flex: "4" }}>
  //       <Outlet />
  //     </div>
  //     <Footer />
  //   </div>
  // );
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:"/login",
      element:<Login />
    },
    {
      path:"/register",
      element:<Register />
    },
    {
      path:"/song/:songId",
      element:<SingleSongPage />
    },
    {
      path:"*",
      element:<Navigate to="/login" />
    },
  ]) 

  const protectedRouter = createBrowserRouter([
    {
      path:"/",
      element:<Home />
    },
    {
      path:"*",
      element:<Navigate to="/" />
    },
    {
      path:"/logout",
      element:<Login />
    },
  ]) 
  return (
    // <RouterProvider router={ selector?.currentUser?.user ? protectedRouter : router}/>
    <RouterProvider router={router}/>
  )
}

export default App