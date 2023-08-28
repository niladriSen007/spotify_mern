import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LogoContainer from "../components/LogoContainer";
import { SlSocialSpotify } from "react-icons/sl";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = await axios.post(`/auth/register`, formData);
    console.log(userDetails.data);
  };

  return (
    <div className="h-[100vh] bg-black flex flex-col ">
      <LogoContainer />
      <div className=" h-[85vh] rounded-lg shadow-lg flex items-center justify-center">
        <div className=" w-96 p-6 bg-black shadow-md rounded border-2 border-gray-800">
          <h2 className="text-2xl text-white text-center font-bold  mb-4">
            Register
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block font-medium mb-1 text-white py-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-full focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block font-medium mb-1 text-white py-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-full focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block font-medium mb-1 text-white py-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-full focus:outline-none focus:border-green-500"
              />
            </div>
            <button
              type="submit"
              className="w-full font-bold transition-all duration-300 bg-green-500 text-white py-2 rounded-full my-3 hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200"
            >
              Register
            </button>
            <span className="px-8 md:px-12 text-xs md:text-md  text-white">
              Already have an Account ?{" "}
            </span>
            <button className="w-full border-2 text-black hover:text-white border-blue-600 font-noormal transition-all duration-300 bg-white  py-2 rounded-full my-3 hover:bg-blue-500  hover:border-white focus:outline-none focus:ring focus:ring-blue-200">
              <Link to="/login" className=" flex items-center justify-center gap-2">
                Login here <SlSocialSpotify size={20} />
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
