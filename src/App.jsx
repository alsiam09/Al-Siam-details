import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter , createRoutesFromElements , Route , RouterProvider } from 'react-router-dom'
import RootLayOut from './componant/RootLayOut'
import Home from './page/Home'

function App() {

  const Router = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayOut/>}>
      <Route path='/' element={<Home/>} ></Route>
    </Route>
  ))

  return (
    <>
    <RouterProvider router={Router}/>
    </>
  )
}

export default App
