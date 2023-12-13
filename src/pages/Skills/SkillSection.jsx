import React, { useEffect } from 'react'
import React_logo from '../../images/logo.jpeg'
import { useState } from 'react'

const skillsTag = [
    {
        name:'Frontend'
    },
    {
        name:'Backend'
    }
]

const skillsData = [
    {
        id:1,
        title:'React',
        logo:React_logo,
        tag:'Frontend'
    },    {
        id:2,
        title:'React',
        logo:React_logo,
        tag:'Frontend'
    },    {
        id:3,
        title:'Node',
        logo:React_logo,
        tag:'Backend'
    }
]


function SkillSection() {
    
    const [item, setItem] = useState({name:'Frontend'})
    const [skills,setSkills] = useState([])
    const [active,setActive] = useState(0)
    
    useEffect(() => {
         {
            const newSkills = skillsData.filter(skill => {
                return skill.tag === item.name
            })
            setSkills(newSkills)
        }
    },[item])

    const handleClick = (e,index) => {
        console.log(e.target.textContent)
        setItem({name:e.target.textContent})
    }
    

  return (
    <div>
        <div className='skill_buttons'>
            {skillsTag.map((item,index) => {
                return (
                    <span onClick={(e) => {
                        handleClick(e,index);
                    }} className='skill_button font-mont' 
                    key={index}>
                        {item.name}
                    </span>
                )
            })}
        </div>
        <div className='skill_container'>
            {skills.map((item) => {
                return <span>{item.title}</span>
            })}
        </div>
    </div>
  )
}

export default SkillSection