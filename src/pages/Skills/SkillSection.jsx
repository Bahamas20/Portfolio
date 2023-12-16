import React, { useEffect } from 'react'
import { useState } from 'react'
import SkillItem from './SkillItem'
import "./Skills.scss"
import opencv_svg from '../../svg/opencv.svg'
import tf_svg from '../../svg/tf.svg'
import mssql_svg from '../../svg/mssql.svg'


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
        title:'HTML',
        badge:'bx bxl-html5',
        tag:'Frontend'
    },     {
        id:3,
        title:'CSS',
        badge:'bx bxl-css3',
        tag:'Frontend'
    },    {
        id:4,
        title:'Javascript',
        badge:'bx bxl-javascript',
        tag:'Frontend'
    },    {
        id:5,
        title:'Git',
        badge:'bx bxl-git',
        tag:'Frontend'
    },    {
        id:6,
        title:'Bootstrap',
        badge:'bx bxl-bootstrap',
        tag:'Frontend'
    },    {
        id:7,
        title:'Python',
        badge:'bx bxl-python',
        tag:'Backend'
    }
    ,    {
        id:8,
        title:'Java',
        badge:'bx bxl-java',
        tag:'Backend'
    },    {
        id:9,
        title:'C++',
        badge:'bx bxl-c-plus-plus',
        tag:'Backend'
    },    {
        id:10,
        title:'PostgreSQL',
        badge:'bx bxl-postgresql',
        tag:'Backend'
    },    {
        id:11,
        title:'Spring',
        badge:'bx bxl-spring-boot',
        tag:'Backend'
    } ,
    {
        id:12,
        title:'Node',
        badge:'bx bxl-nodejs',
        tag:'Backend'
    }
    ,
    {
        id:13,
        title:'MongoDB',
        badge:'bx bxl-mongodb',
        tag:'Backend'
    },
    {
        id:14,
        title:'OpenCV',
        badge:'',
        logo: opencv_svg,
        tag:'Backend'
    },
    {
        id:15,
        title:'Tensorflow',
        badge:'',
        logo: tf_svg,
        tag:'Backend'
    }
    ,
    {
        id:16,
        title:'MSSQL',
        badge:'',
        logo: mssql_svg,
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