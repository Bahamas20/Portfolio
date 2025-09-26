import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

const WorksItems = ({item}) => {
  return (
    <div className='work_card font-mont' key={item.id}>
        <a href={item.web_link} target="_blank" rel="noopener noreferrer">
          <img src={item.image} alt='' className='work_img' />
        </a>
        <h1 className='work_title'>
          {item.web_link ? (
            <a href={item.web_link} className="work_title_link" target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
          ) : (
            item.title
          )}
        </h1>
        <p className='description font-mont'>{item.description}</p>
        <p className='description tech font-mont'>{item.tech}</p>
        {item.link && (
  <a href={item.link} className='changeColor' target="_blank">
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