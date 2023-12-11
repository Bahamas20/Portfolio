import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

const WorksItems = ({item}) => {
  return (
    <div className='work_card font-mont' key={item.id}>
        <img src={item.image} alt='' className='work_img'></img>
        <h1 className='work_title'>{item.title}</h1>
        <p className='description font-mont'>{item.description}</p>
        {item.link && (
  <a href={item.link} className='changeColor'>
    <GitHubIcon
      sx={{ fontSize: '55px' }}
      onMouseOver={({ target }) => (target.style.color = '#187d5d')}
      onMouseOut={({ target }) => (target.style.color = '#20AA7E')}
    />
  </a>
)}
    </div>
  )
}

export default WorksItems