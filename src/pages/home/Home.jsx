import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Messagecontainer from '../../components/messages/Messagecontainer'

const Home = () => {
  return (
    <div className=' flex md:flex-row flex-col gap-4 mt-[5rem] rounded-md'>
      <Sidebar/>
  <div className='border-r-2 border-white pl-4'></div>

      <Messagecontainer/>
    </div>
  )
}

export default Home
