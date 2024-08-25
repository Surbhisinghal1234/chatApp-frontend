import React from 'react'
import SearchInput from './SearchInput'
import LogoutButton from './LogoutButton'
import Conversations from './Conversations'
import "../../App.css"


const Sidebar = () => {
  return (
    <div className=' w-[19rem] xs:w-[23rem] lg:w-[23rem] h-[40rem] m-auto  flex flex-col p-6 bg-[#22021e] rounded-3xl'   style={{ boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.7)' }}>
      <SearchInput/>
      <div className=''></div>
   <Conversations/>
      <LogoutButton/>

    </div>
  )
}

export default Sidebar