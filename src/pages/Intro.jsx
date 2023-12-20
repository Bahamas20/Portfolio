import React from 'react'
import './intro.scss'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import { ReactSVG } from "react-svg"
import db_svg from '../svg/db.svg'
import Lottie from "lottie-react";
import ai_animation from "../lotties/ai logo.json"
import database_animation from "../lotties/database.json"


function Intro() {

    const [text] = useTypewriter({
        words:['Programmer.','Student.'],
        loop: {},
    });
  return (  
    <div className='intro-text' id='home' >
        <div className='white-block'></div>
        <div className='introduction'>
            <div className='intro-container font-mont'>
                <h1>Hello, I'm Hamas <br/> 
            a <span style={{fontWeight:'bold'}}>{text}</span>
            <Cursor/>
            </h1>
            </div>
            <div className='ai-container'>
                <Lottie animationData={ai_animation} loop={true} />  
            </div>
            <div className='db-container'>
                <Lottie animationData={database_animation} loop={true} /> 
            </div>


        </div>
        <div className='text2 font-open'>
    
            <h2>I'm a student in National University of Singapore<br/>
        Specialising in <span>AI</span>, <span>Machine Learning</span> and <span>Databases</span></h2>
            
        </div>
    </div>
  )
}

export default Intro