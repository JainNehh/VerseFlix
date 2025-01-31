import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import Layout from './Components/Layout'

function App() {
  const routerList = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Layout />}>
     <Route path="/" element={<Home/>}/>
    
    </Route> )
  );

  return (
    <section>
    <RouterProvider router={routerList} />
  </section>

  );
}

export default App
