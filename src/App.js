import React from 'react'
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Footer from './components/Footer';
import Intro from './pages/Intro.jsx';
import Project from './pages/Project/Project';
import Skills from './pages/Skills/Skills';
import About from './pages/About';
import Contact from './pages/Contact';
import { Element } from 'react-scroll';

const Layout = () => {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Element name="intro">
        <Intro></Intro>
      </Element>
      <Element name="project">
        <Project></Project>
      </Element>
      <Element name="skills">
        <Skills></Skills>
      </Element>
      <Element name="about">
        <About></About>
      </Element>
      <Element name="contact">
        <Contact></Contact>
      </Element>
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