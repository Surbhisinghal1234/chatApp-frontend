import React, { useState } from "react";
import GenderCheckbox from "../../components/GenderCheckbox";
import { Link } from "react-router-dom";
import useSign from "../../hooks/useSign";
import ThemeToggle from "../../components/theme/ThemeToggle";

// import { useTheme } from "@emotion/react";
import { useTheme } from "../../hooks/useTheme";
import "./signUp.css"

import img1 from "../../assets/robot-img6.png"
import img2 from "../../assets/robot-img4.png"

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const {theme, toggleTheme} = useTheme()

  const { loading, signup } = useSign();

  const handleCheckboxChange = (gender) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      gender: gender,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(formData);
  };
  return (
    <>
      <div className="flex flex-col  justify-center items-center h-screen signUp-bg">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      <div className="flex w-auto px-10  md:w-[35rem] flex-col signUp-content rounded-lg items-center justify-center pb-5 ">
      <div className="signUp-left-bg h-[13rem] w-[13rem] hidden md:flex">
          <img src={theme === 'light' ? img2 : img2}alt="" className="h-[100%] w-[100%] object-cover" />
      </div>
      <div className=" flex flex-col gap-5">
        {/* <div className="flex flex-col gap-[2rem] items-center min:w-[25rem] md:p-12 p-6 rounded-lg shadow-black shadow-md signUp-content"> */}

        <h1 className={`text-xl sm:text-2xl md:text-3xl font-semibold text-center ${theme === "light" ? "text-slate-950" : "text-white"}`}>
          Sign Up
          {/* <span className={`text-black inline-block ml-2  ${theme === "light" ? "text-slate-700" : "text-white"}`}>Chat Application</span> */}
        </h1>

          <form action="" onSubmit={handleSubmit} className="gap-6 flex flex-col w-auto md:w-[25rem]">
            <div className="flex gap-[4.9rem]">
              {/* <label htmlFor="" className=" font-medium md:text-[1.1rem]">
                Username
              </label> */}
              <input
                type="text"
                placeholder="Username "
                className="inp1 input-field outline-none w-full px-5 py-2 border-2 rounded-3xl"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>

            <div className="flex gap-[7.1rem]">
              {/* <label htmlFor="" className="md:text-[1.1rem] font-medium">
                Email
              </label> */}
              {/* <input
                type="email"
                placeholder="Enter email "
                className="inp1 input-field outline-none rounded-md w-[8rem] md:w-auto px-2 py-2"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              /> */}
               <input
                type="email"
                placeholder="Email "
                className="inp1 input-field outline-none w-full px-5 rounded-3xl  py-2 border-2"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="flex gap-[5.3rem]">
              {/* <label htmlFor="" className=" md:text-[1.1rem]  font-medium">
                Password
              </label> */}
              <input
                type="password"
                placeholder="Password "
                className="inp1 input-field outline-none w-full px-5 rounded-3xl  py-2 border-2"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            <div className="flex gap-[1.1rem]">
              {/* <label htmlFor="" className=" md:text-[1.1rem] font-medium">
                Confirm Password
              </label> */}
              <input
                type="password"
                placeholder="Confirm Password "
                className="inp1 input-field outline-none w-full px-5 rounded-3xl  py-2 border-2"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
            </div>

            <GenderCheckbox
              onCheckboxChange={handleCheckboxChange}
              selectedGender={formData.gender}
            />

            {/* <Link
              className="md:text-[18px] font-medium  hover:underline hover:text-black inline-block"
              to={"/login"}
            >
            
              Already have an account
            </Link> */}
             <Link className="btn btn-same  rounded-full text-center px-8 py-2 font-bold border-none" to="/login">
             Already have an account/Login
          </Link>

            <div>
              {/* <button
                className="btn border-none rounded-full md:text-[16px] px-6 py-[6px] font-medium  "
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Sign up"
                )}
              </button> */}
                <button
            type="submit"
            className={`btn btn-same w-full rounded-full font-bold  px-8  text-white border-none ${loading ? "bg-gray-400" : "bg-blue-500"}`}
            disabled={loading}
          >
            {loading ? <span className="loading  loading-spinner"></span> : "Sign up"}
          </button>
            </div>
          </form>

        {/* </div> */}
      </div>
      </div>

      </div>

    </>
  );
}

export default SignUp;
