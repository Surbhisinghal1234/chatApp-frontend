import React from 'react'
import SearchInput from './SearchInput'
import LogoutButton from './LogoutButton'
import Conversations from './Conversations'


const Sidebar = () => {
  return (
    <div className=''>
      <SearchInput/>
      <div className='divider'></div>
   <Conversations/>
      <LogoutButton/>

    </div>
  )
}

export default Sidebar
