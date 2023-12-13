import React from 'react'
import Salesy from '../../images/salesy.jpeg'
import Smart from '../../images/smart.jpeg'
import Weapon from '../../images/weapon.jpg'
import Claylette from '../../images/claylette.jpg'
import WorksItems from './WorksItems.jsx'


const projectData = [
    {
        id:1,
        image: Salesy,
        title: 'Salesy',
        description : 'Salesy is an all-in-one tool for NUS canteen vendors whom want to keep track of their tasks, inventory and suppliers. With Salesy, you can expect a good visualization of your inventory and be as efficient as possible with your bookkeeping routines.',
        link: 'https://ay2223s1-cs2103t-w08-4.github.io/tp/'
    },
    {
        id:2,
        image:Smart,
        title: 'Smart Suite',
        description : 'Smart Suit is an online ERP software for Singaporean F&B owners developed by Sunpro Inno Apps. Worked on it by implementing user-friendly features, integrating useful APIs, collaborating with senior developers and playing a key role in software testing and quality assurance processes.'
    },
    {
        id:3,
        image: Weapon,
        title: 'Weapon Detector',
        description : 'Weapon Detector is a computer vision project focused on automatically identifying weapons within a dataset of images. We integrated various models like CNN, YOLO, and VGG to enhance the detection process. This project showcases a hands-on exploration of advanced deep learning techniques, combining different architectures.',
        link: 'https://github.com/pixelmasters4243/weapon'
    },
    {
        id:4,
        image: Claylette,
        title: 'Claylette',
        description: 'Coming Soon'
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