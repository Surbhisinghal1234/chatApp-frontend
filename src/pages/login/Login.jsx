import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import ThemeToggle from "../../components/theme/ThemeToggle";
import { useTheme } from "../../hooks/useTheme";
import "./login.css";
import img1 from "../../assets/robot.png"
import img2 from "../../assets/login-robot-2.png"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();
  const { theme, toggleTheme } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen login-bg">

     
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      <div className="flex login-content rounded-lg items-center justify-center p-10 gap-10">
      <div className="login-left-bg h-[20rem] w-[15rem] hidden md:flex">
          <img src={theme === 'light' ? img2 : img1}alt="" className="h-[100%] w-[100%] object-cover" />
      </div>
      <div className=" flex flex-col gap-10">
        <h1 className={`text-xl sm:text-2xl md:text-3xl font-semibold text-center ${theme === "light" ? "text-slate-700" : "text-white"}`}>
          Login to
          <span className={`text-black inline-block ml-4  ${theme === "light" ? "text-slate-700" : "text-white"}`}>Chat Application</span>
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            {/* <label htmlFor="email" className="text-lg font-medium">Email</label> */}
            <input
              type="email"
              id="email"
              placeholder="Email"
              className="outline-none border-white border-2 rounded-3xl px-5 py-2 w-full sm:w-auto shadow-sm shadow-[#f6d4f579] input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            {/* <label htmlFor="password" className="text-lg font-medium">Password</label> */}
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="outline-none rounded-3xl border-white border-2 px-5 py-2 w-full sm:w-auto shadow-sm shadow-[#f6d4f579] input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button
            type="submit"
            className={`btn btn-same rounded-full font-bold  px-8  text-white border-none ${loading ? "bg-gray-400" : "bg-blue-500"}`}
            disabled={loading}
          >
            {loading ? <span className="loading  loading-spinner"></span> : "Login"}
          </button>
          <Link className={`text-lg font-medium hover:underline  ${theme==="light"? "hover:text-black" : "hover:text-gray-500"}`}   to="/signup">
            {"Don't "} have an account?
          </Link>
          <Link className="btn btn-same  rounded-full text-center px-8 py-2 font-medium border-none" to="/signup">
            Sign Up
          </Link>

        </form>
        
        </div>
      </div>
    </div>
  );
};

export default Login;
