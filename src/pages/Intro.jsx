import React from 'react'
import './intro.scss'
import {useTypewriter,Cursor} from 'react-simple-typewriter'



function Intro() {

    const [text] = useTypewriter({
        words:['Programmer.','Student.'],
        loop: {},
    });
  return (  
    <div className='intro-text' >
        <div className='text font-mont'>
            <h1>Hello, I'm Hamas <br/> 
        a <span style={{fontWeight:'bold'}}>{text}</span>
        <Cursor/>
        </h1>
        </div>
        <div className='text2 font-open'>
    
            <h2>I'm a student in National University of Singapore<br/>
        Specialising in <span>AI</span>, <span>Machine Learning</span> and <span>Databases</span></h2>
            
        </div>
    </div>
  )
}

export default Intro