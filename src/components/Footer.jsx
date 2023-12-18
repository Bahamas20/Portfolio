import React from 'react'
import './Footer.css'
import 'boxicons'


function Footer() {

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section className='footer'>
      <div className='buttons'>
        <div className='button' onClick={() => openLink('https://github.com/Bahamas20')}>
          <div className='icon'>
            <i class='bx bxl-github' ></i>        
            </div>  
            <span className='font-mont'>Github</span>
          </div>
          <div className='button' onClick={() => openLink('https://www.linkedin.com/in/mohamed-hamas-936445146/')}>
          <div className='icon'>
          <i class='bx bxl-linkedin-square' ></i>
          </div>
          <span className='font-mont'>LinkedIn</span>
          </div>
          <div className='button' onClick={() => openLink('https://www.instagram.com/ba_hamas_/')}>
          <div className='icon'>
          <i class='bx bxl-instagram' ></i>
          </div>
          <span className='font-mont'>Instagram</span>
          </div>
          <div className='button' onClick={() => openLink('mailto:mohamedhamas95@gmail.com')}>
          <div className='icon'>
          <i class='bx bxl-gmail' ></i>  
          </div>          
          <span className='font-mont'>Gmail</span>
        </div>
      </div>
    </section>
  )
}

export default Footer