import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

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
      <div className="flex flex-col items-center justify-center min-w-96 mx-auto bg-red-300">
        <div className="flex flex-col gap-[2rem] items-center w-full p-6 rounded-lg shadow-md bg-gray-200">
          <h1 className="text-3xl font-semibold text-center text-slate-700 ">
            Login to
            <span className="text-blue-500 ">Chat Application</span>
          </h1>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-[1rem]"
          >
            <div className="flex gap-[2rem]">
              <label htmlFor="" className="label p-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter Username "
                className="outline-none bg-gray-300 px-2 "
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
              />
            </div>
            <div className="flex gap-[.3rem]">
              <label htmlFor="" className="label p-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Username w-full"
                className="outline-none bg-gray-300 px-2"
              
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
              />
            </div>

            <Link
              className="text-sm hover:underline hover:text-blue-200 inline-block"
              to={"/signup"}
            >
              {" "}
              {"Don't "} have an account
            </Link>

            <div>


              <button className="bg-red-500 rounded-full px-2 py-1 font-bold text-white "  disabled={loading}>
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
