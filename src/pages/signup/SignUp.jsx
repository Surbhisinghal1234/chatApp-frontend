import React, { useState } from "react";
import GenderCheckbox from "../../components/GenderCheckbox";
import { Link } from "react-router-dom";
import useSign from "../../hooks/useSign";
import "./SignUp.css"

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

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
      <div className="flex justify-center items-center h-screen signUp-bg">
        <div className="flex flex-col gap-[2rem] items-center min:w-[25rem] md:p-12 p-6 rounded-lg shadow-black shadow-md signUp-content">
          <h1 className="md:text-3xl sm:text-2xl text-xl font-semibold text-center text-[#cb9ac4ea] ">
            Signup to
            <span className="text-black ml-4 ">Chat Application</span>
          </h1>

          <form action="" onSubmit={handleSubmit} className="gap-6 flex flex-col">
            <div className="flex gap-[4.9rem]">
              <label htmlFor="" className=" font-medium md:text-[1.1rem]">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter Username "
                className="inp1 outline-none rounded-md w-[8rem] md:w-auto  px-2 py-2"
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>

            <div className="flex gap-[7.1rem]">
              <label htmlFor="" className="md:text-[1.1rem] font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email "
                className="inp1 outline-none rounded-md w-[8rem] md:w-auto px-2 py-2"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="flex gap-[5.3rem]">
              <label htmlFor="" className=" md:text-[1.1rem]  font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password "
                className="inp1 outline-none rounded-md w-[8rem] md:w-auto  px-2 py-2"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            <div className="flex gap-[1.1rem]">
              <label htmlFor="" className=" md:text-[1.1rem] font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Enter Confirm Password "
                className="inp1 outline-none rounded-md w-[8rem] md:w-auto px-2 py-2"
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

            <Link
              className="md:text-[18px] font-medium  hover:underline hover:text-black inline-block"
              to={"/login"}
            >
            
              Already have an account
            </Link>

            <div>
              <button
                className="btn border-none rounded-full md:text-[16px] px-6 py-[6px] font-medium  "
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Sign up"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
