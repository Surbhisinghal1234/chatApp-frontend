import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Messagecontainer from '../../components/messages/Messagecontainer'

const Home = () => {
  return (
    <div className=' flex lg:w-[60%] gap-4 bg-white flex-col lg:flex-row m-auto border-2 border-black rounded-md min:h-[40rem] justify-center mt-[4rem] '>
      <Sidebar/>
  <div className='border-r-2 border-blue-800 lg:pl-4 '></div>

      <Messagecontainer/>
    </div>
  )
}

export default Home
