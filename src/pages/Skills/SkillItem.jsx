import React from 'react'
import 'boxicons'
import "./Skills.scss"



const SkillItem = ({item}) => {
  console.log({item})
  return (

    <div className='skills-content'>
      <h1 className='font-open'>{item.title}</h1>
      {item.badge !== '' ? (
        <i className={item.badge}></i>
      ) : <img src={item.logo} ></img>

  
      }
    </div>
  );
  
}

export default SkillItem