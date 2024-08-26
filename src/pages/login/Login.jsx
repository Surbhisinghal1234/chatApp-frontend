import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import ThemeToggle from "../../components/theme/ThemeToggle";
import { useTheme } from "../../hooks/useTheme";
import "./login.css";

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
    <div className="flex justify-center items-center h-screen login-bg">
      <div className="flex flex-col gap-[2rem] items-center md:p-12 p-6 rounded-lg max:w-[28rem] login-content">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        <h1 className={`text-xl sm:text-2xl md:text-3xl font-semibold text-center ${theme === "light" ? "text-slate-700" : "text-white"}`}>
          Login to
          <span className={`text-black inline-block ml-4  ${theme === "light" ? "text-slate-700" : "text-white"}`}>Chat Application</span>
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-lg font-medium">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              className="outline-none rounded-md px-3 py-2 w-full sm:w-auto shadow-sm shadow-[#f6d4f579] input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-lg font-medium">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              className="outline-none rounded-md px-3 py-2 w-full sm:w-auto shadow-sm shadow-[#f6d4f579] input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Link className="text-lg font-medium hover:underline hover:text-black" to="/signup">
            {"Don't "} have an account?
          </Link>
          <button
            type="submit"
            className={`btn rounded-full px-8 py-2 font-medium text-white border-none ${loading ? "bg-gray-400" : "bg-blue-500"}`}
            disabled={loading}
          >
            {loading ? <span className="loading loading-spinner"></span> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
