import { useState } from 'react'
import {Routes, Route, Navigate} from "react-router-dom"
import './App.css'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import { ToastContainer } from "react-toastify";
import { useAuthContext } from './context/AuthContext'

function App() {

  const {authUser} = useAuthContext()
  
  
  return (
    <>
  <div className=''>
    <Routes>

      <Route path = "/"  element={ authUser ?   <Home/> : <Navigate to = {"/login"}/>}/>
      <Route path = "/login"  element={   authUser ? <Navigate to={"/"}/> :<Login/>}/>
      {/* <Route path = "/login"  element={<Login/>}/> */}

      <Route path = "/signup"  element={authUser ? <Navigate to={"/"}/>:<SignUp/>}/>
      {/* <Route path = "/signup"  element={<SignUp/>}/> */}



    </Routes>
    <ToastContainer />
  </div>


    </>
  )
}

export default App
