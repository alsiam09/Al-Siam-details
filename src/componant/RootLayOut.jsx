import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

const RootLayOut = () => {
  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  )
}

export default RootLayOut