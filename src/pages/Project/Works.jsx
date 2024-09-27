import React from 'react'
import Salesy from '../../images/salesy.jpeg'
import Smart from '../../images/smart.jpeg'
import Weapon from '../../images/weapon.jpg'
import Picolibo from '../../images/picolibo.png'
import WorksItems from './WorksItems.jsx'


const projectData = [
    {
        id:4,
        image: Picolibo,
        title: 'PICOLIBO',
        description: 'PICOLIBO is an innovative workshop app designed by Krux Ventures to empower children to create their own stories using generative AI models. This app offers a hands-on experience, allowing young learners to craft unique narratives and visualize them through AI-generated imagery.'
    },
    {
        id:2,
        image: Salesy,
        title: 'Salesy',
        description : 'Salesy is an all-in-one tool for NUS canteen vendors whom want to keep track of their tasks, inventory and suppliers. With Salesy, you can expect a good visualization of your inventory and be as efficient as possible with your bookkeeping routines.',
        link: 'https://ay2223s1-cs2103t-w08-4.github.io/tp/'
    },
    {
        id:3,
        image:Smart,
        title: 'Smart Suite',
        description : 'Smart Suit is an online ERP software for Singaporean F&B owners developed by Sunpro Inno Apps. Worked on it by implementing user-friendly features, integrating useful APIs, collaborating with senior developers and playing a key role in software testing and quality assurance processes.'
    },
    {
        id:4,
        image: Weapon,
        title: 'Weapon Detector',
        description : 'Weapon Detector is a computer vision project focused on automatically identifying weapons within a dataset of images. We integrated various models like CNN, YOLO, and VGG to enhance the detection process. This project showcases a hands-on exploration of advanced deep learning techniques, combining different architectures.'
        }
]

function Works() {
  return (
    <div className='work_container container2 grid'>
        {projectData.map((item) => {
            return <WorksItems item={item} key={item.id}/>
        })}
    </div>

  )
}

export default Works