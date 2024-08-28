import React, { useState, useEffect } from 'react';
import img1 from "../../assets/robot.png";
import img2 from "../../assets/robot-img6.png"
import "../login/login.css"
import "./welcome.css";
import { Link } from 'react-router-dom'; 
import ThemeToggle from '../../components/theme/ThemeToggle';
import { useTheme } from "../../hooks/useTheme";

const Welcomepage = () => {

  const [text, setText] = useState(""); 
  const message = "Welcome to the chat app ";
  const letters = message.split(''); 
  const {theme, toggleTheme} = useTheme()


  useEffect(() => {
    letters.forEach((letter, ind) => {
      setTimeout(() => {
        setText(prev => prev + letter);
      }, ind * 100);
    });

   
  setText("");
  }, []); 

  return (
    <div className='welcome-bg flex flex-col items-center justify-center h-screen text-center'>


      <ThemeToggle theme={theme} toggleTheme ={toggleTheme}/>
     <div className='flex flex-col justify-center items-center gap-8'>

      <div className=" h-[13rem] w-[13rem] md:flex">
          <img src={theme === 'light' ? img2 : img1}alt="" className="h-[100%] w-[100%] object-cover" />
      </div>
      <div className=''>
        <span className={`font-bold text-2xl md:text-4xl px-4 ${theme==="light" ? "text-black": "text-white"}`}>{text}</span>
      </div>
      <div className='button-container flex mt-2  gap-4'>
       
          <Link to="/login">
          <button className='btn btn-same  py-2 font-bold px-6 rounded-full'>Login</button>
        </Link>
        <Link to="/signup">
          <button className='btn btn-same  py-2 font-bold px-6 rounded-full '>Signup</button>
        </Link>
      </div>
    </div>
    </div>

  );
}

export default Welcomepage;
