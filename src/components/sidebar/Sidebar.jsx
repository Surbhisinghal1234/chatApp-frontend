import React from 'react'
import SearchInput from './SearchInput'
import LogoutButton from './LogoutButton'
import Conversations from './Conversations'


const Sidebar = () => {
  return (
    <div className='lg:w-[50%] min-h-[40rem] overflow-scroll p-6 bg-black text-white'>
      <SearchInput/>
      <div className=''></div>
   <Conversations/>
      <LogoutButton/>

    </div>
  )
}

export default Sidebar
