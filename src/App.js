import React from 'react'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";import Home from "./pages/Home.jsx"
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Footer from './components/Footer';

const Layout = () => {
  return (
    <>
    <ResponsiveAppBar></ResponsiveAppBar>
    <Home></Home>
    <Footer></Footer>
    </>
  )
  }
  

function App() {
  return (
    <div className="app">
      <div className="container">
      <Layout></Layout>
      </div>
    </div>
  )
}

export default App