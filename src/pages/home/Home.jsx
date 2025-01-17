import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Messagecontainer from '../../components/messages/Messagecontainer'
import "./home.css"

const Home = () => {
  return (
    <div className='home-bg py-[4rem] flex justify-center items-center'>

    <div className=' flex  gap-10 mt-auto flex-col lg:flex-row rounded-md min:h-[40rem] justify-center '>
      <Sidebar />
  {/* <div className='border-r-2 border-blue-800 lg:pl-4 '></div> */}

      <Messagecontainer/>
    </div>
    </div>
  )
}

export default Home
