import React from 'react'
import 'boxicons'
import "./Skills.scss"



const SkillItem = ({item}) => {
  return (

    <div className='skills-content'>
      <h2 className='font-open'>{item.title}</h2>
      {item.badge !== '' ? (
        <i className={item.badge}></i>
      ) : <img src={item.logo} ></img>

  
      }
    </div>
  );
  
}

export default SkillItem