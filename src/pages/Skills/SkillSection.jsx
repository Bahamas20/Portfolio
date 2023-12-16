import React, { useEffect } from 'react'
import React_logo from '../../images/logo.jpeg'
import { useState } from 'react'
import SkillItem from './SkillItem'

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
        badge:'bx bxl-react',
        tag:'Frontend'
    },    {
        id:2,
        title:'React',
        badge:'bx bxl-react',
        tag:'Frontend'
    },    {
        id:3,
        title:'Node',
        badge:'bx bxl-nodejs',
        tag:'Backend'
    },    {
        id:4,
        title:'React',
        badge:'bx bxl-react',
        tag:'Frontend'
    },    {
        id:5,
        title:'React',
        badge:'bx bxl-react',
        tag:'Frontend'
    },    {
        id:6,
        title:'React',
        badge:'bx bxl-react',
        tag:'Frontend'
    },    {
        id:2,
        title:'React',
        badge:'bx bxl-react',
        tag:'Frontend'
    },    {
        id:2,
        title:'React',
        badge:'bx bxl-react',
        tag:'Frontend'
    },    {
        id:2,
        title:'React',
        badge:'bx bxl-react',
        tag:'Frontend'
    },    {
        id:2,
        title:'React',
        badge:'bx bxl-react',
        tag:'Frontend'
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
        if (e.target.textContent != item.name) {
            if(active == 0) {
                setActive(1)
            }
            else {
                setActive(0)
            }
        }
    }
    

  return (
    <div>
        <div className='skill_buttons'>
        {skillsTag.map((item, index) => (
            ((active === 0 && item.name === 'Frontend') || (active === 1 && item.name === 'Backend')  ) ? (
                <span
                onClick={(e) => handleClick(e, index)}
                className='skill_button_false font-mont'
                key={index}
                >
                {item.name}
                </span>
            ) : (
                <span
                onClick={(e) => handleClick(e, index)}
                className='skill_button font-mont'
                key={index}
                >
                {item.name}
                </span>
            )
            ))}

        </div>
        <div className='skill_container'>
            {skills.map((item) => {
                return <SkillItem item={item}></SkillItem>
            })}
        </div>
    </div>
  )
}

export default SkillSection