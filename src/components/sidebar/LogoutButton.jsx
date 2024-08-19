import React from 'react'
import {BiLogOut} from "react-icons/bi"
import useLogout from '../../hooks/useLogout'

const LogoutButton = () => {

  const {loading, logout} = useLogout()
  // const {}
  return (
    <div className='mt-auto'>
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

