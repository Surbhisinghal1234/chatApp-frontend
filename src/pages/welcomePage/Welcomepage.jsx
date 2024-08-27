import React, { useState, useEffect } from 'react';
import img1 from "../../assets/robot.png";
import img2 from "../../assets/robot-img6.png"
import ThemeToggle from "../../components/theme/ThemeToggle";
import { useTheme } from "../../hooks/useTheme";

import "./welcome.css";
import { Link } from 'react-router-dom'; 
const Welcomepage = () => {
  const [text, setText] = useState(""); 
  const message = "Welcome to the chat app ";
  const letters = message.split(''); 
  const { theme, toggleTheme } = useTheme();


  useEffect(() => {
    letters.forEach((letter, ind) => {
      setTimeout(() => {
        setText(prev => prev + letter);
      }, ind * 100);
    });

   
  setText("");
  }, []); 

  return (
    <div className='welcome-bg flex flex-col gap-10 items-center justify-center h-screen text-center'>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      {/* <div className='h-[14rem] w-[12rem]'>
        <img
          src={img1}
          alt="image"
          className="h-[100%] w-[100%] object-cover"
        />
      </div> */}
      <div className="signUp-left-bg h-[13rem] w-[13rem] hidden md:flex">
          <img src={theme === 'light' ? img2 : img1}alt="" className="h-[100%] w-[100%] object-cover" />
      </div>
      <div className=''>
        <span className={`font-bold text-2xl md:text-4xl ${theme==="light" ? "text-black": "text-white"}`}>{text}</span>
      </div>
      <div className='button-container flex  gap-4'>
        <Link to="/login">
          <button className='bg-white text-black py-2 font-bold px-6 rounded-full hover:text-[#080a14] hover:bg-gray-400 transition duration-300 ease-in-out'>Login</button>
        </Link>
        <Link to="/signup">
          <button className='bg-white text-black py-2 font-bold px-6 rounded-full hover:bg-gray-400 hover:text-[#080a14] transition duration-300 ease-in-ou'>Signup</button>
        </Link>
      </div>
    </div>
  );
}

export default Welcomepage;
