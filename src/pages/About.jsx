import React from 'react'
import './About.css'
import image from '../images/abt.png'

function About() {
  return (
    <div className='section about' id='about me'>
        <h1 className='section_title font-mont'>About Me</h1>
            <div className='description_text'>
            <div className='box'>
            <img className='about_img' src={image}></img>
            </div>
            <h3 className='text font-open'>
            Hello, I'm Hamas, an undergraduate Computer Science student at NUS. My focus areas are Artificial Intelligence (AI) and Databases, as I'm passionate about the potential of AI to transform industries and the critical role that databases play in managing and analyzing data. I am a determined individual with a strong willingness to learn and motivation to achieve excellence.
            <br />
            <br />
            My hobbies include watching football and movies. I also love to solve puzzles and riddles, which stimulates creative thinking. In a world fueled by coffee cravings, I'm determined in my search to find or make the best tea.
            </h3>
            </div>
    </div>
  )
}

export default About