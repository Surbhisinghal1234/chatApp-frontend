import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Messagecontainer from '../../components/messages/Messagecontainer'

const Home = () => {
  return (
    <div className=' flex bg-slate-400 rounded-md py-4 px-8'>
      <Sidebar/>
  <div className='border-r-2 pl-4'></div>

      <Messagecontainer/>
    </div>
  )
}

export default Home
