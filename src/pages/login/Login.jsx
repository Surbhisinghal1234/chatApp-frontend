import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import "./login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const {loading, login} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login( email,password)
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen login-bg">
        <div className="flex flex-col gap-[2rem] items-center md:p-12 p-6 rounded-lg max:w-[28rem]  login-content">
          <h1 className="md:text-3xl sm:text-2xl text-xl font-semibold text-center text-slate-700  ">
            Login to
            <span className="text-black inline-block ml-4">Chat Application</span>
          </h1>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-[1.5rem]"
          >
            <div className="flex gap-[3rem]">
              <label htmlFor="" className="md:text-[1.2rem] font-medium ">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Username "
                className="outline-none rounded-md text-white bg-[#22021eaa] px-2 py-2 w-[8rem] sm:w-auto shadow-sm shadow-[#f6d4f579] "
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>
            <div className="flex gap-[.8rem]">
              <label htmlFor="" className="md:text-[1.2rem] font-medium ">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="outline-none rounded-md bg-[#22021eaa] px-2 text-white py-2 w-[8rem] sm:w-auto shadow-sm shadow-[#f6d4f579]"
              
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
            </div>
            <Link
              className="md:text-[1.2rem] font-medium hover:underline hover:text-black inline-block"
              to={"/signup"}
            >
             
              {"Don't "} have an account
            </Link>
            <div>
              <button className="btn rounded-full px-8  font-medium text-[16px] text-[#130111aa] border-none "  disabled={loading}>
                {
                  loading ? (<span className="loading loading-spinner">

                  </span>) : (
                    "Login"
                  )
                }
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
