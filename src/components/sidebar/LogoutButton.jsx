import React from 'react'
import {BiLogOut} from "react-icons/bi"
import useLogout from '../../hooks/useLogout'

const LogoutButton = () => {

  const {loading, logout} = useLogout()
  
  return (
    <div className='mt-auto bg-[#e9e1e532]  rounded-3xl py-3 px-4 hover:bg-boxLeft shadow-shadowForLeftBox' >
    {!loading ? (
      <p className='flex items-center gap-2 text-white cursor-pointer' onClick={logout} >
        <BiLogOut className='text-2xl ' /> Log out
      </p>
    ) : (
      <span className='loading loading-spinner'></span>
    )}
  </div>
  )
}

export default LogoutButton

