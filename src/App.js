import React from 'react'
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Footer from './components/Footer';
import Intro from './pages/Intro.jsx';
import Project from './pages/Project/Project';
import Skills from './pages/Skills/Skills';
import About from './pages/About';

const Layout = () => {
  return (
    <>
    <ResponsiveAppBar></ResponsiveAppBar>
    <Intro></Intro>
    <Project></Project>
    <Skills></Skills>
    <About></About>
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