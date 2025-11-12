import React from 'react'
import NavbarAdmin from '../../components/adminDashboard/NavbarAdmin'
import Sidebar from '../../components/adminDashboard/Sidebar'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext'
import { useEffect } from 'react'

const Layout = () => {

  const {isOwner, navigate} = useAppContext()

  useEffect(()=>{
    if(!isOwner){
      navigate('/')
    }

  }, [isOwner])

  return (
    <div className='flex flex-col'>
      <NavbarAdmin/>

      <div className='flex'>
        <Sidebar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout