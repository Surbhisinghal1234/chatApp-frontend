import React from 'react'
import SearchInput from './SearchInput'
import LogoutButton from './LogoutButton'
import Conversations from './Conversations'


const Sidebar = () => {
  return (
    <div className='lg:w-[40%] min-h-[40rem] overflow-scroll flex flex-col p-6 bg-[#22021e] rounded-3xl '>
      <SearchInput/>
      <div className=''></div>
   <Conversations/>
      <LogoutButton/>

    </div>
  )
}

export default Sidebar
