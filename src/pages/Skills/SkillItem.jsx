import React from 'react'
import 'boxicons'

const SkillItem = ({item}) => {

  return (
    <div className='skills-content'>
        <h3 className='font-open'>{item.title}</h3>
        <i class={item.badge}></i>    
    </div>
  )
}

export default SkillItem