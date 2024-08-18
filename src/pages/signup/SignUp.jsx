import React, { useState } from "react";
import GenderCheckbox from "../../components/GenderCheckbox";
import { Link } from "react-router-dom";
import useSign from "../../hooks/useSign";

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
      <div className="flex flex-col items-center justify-center min-w-72 mx-auto ">
        <div className="flex flex-col gap-[2rem] items-center w-full p-6 rounded-lg shadow-md bg-gray-200">
          <h1 className="text-3xl font-semibold text-center text-slate-700 ">
            Signup to
            <span className="text-blue-500 ml-4 ">Chat Application</span>
          </h1>

          <form action="" onSubmit={handleSubmit} className="gap-4 flex flex-col">
            <div className="flex gap-[2rem]">
              <label htmlFor="" className="label p-2 font-medium">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter Username "
                className="outline-none bg-gray-300 px-2 "
                value={formData.username}
                onChange={(e) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </div>

            <div className="flex gap-[2rem]">
              <label htmlFor="" className="label p-2 font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email "
                className="outline-none bg-gray-300 px-2 "
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="flex gap-[2rem]">
              <label htmlFor="" className="label p-2 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter Password "
                className="outline-none bg-gray-300 px-2 "
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            <div className="flex gap-[2rem]">
              <label htmlFor="" className="label p-2 font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Enter Confirm Password "
                className="outline-none bg-gray-300 px-2 "
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
              className="text-sm font-medium ml-2 hover:underline hover:text-blue-200 inline-block"
              to={"/login"}
            >
            
              Already have an account
            </Link>

            <div>
              <button
                className="bg-red-500 rounded-full px-2 py-1 font-bold text-white "
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
