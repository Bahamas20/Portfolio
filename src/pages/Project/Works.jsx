import React from 'react'
import Salesy from '../../images/salesy.jpeg'
import Smart from '../../images/smart.jpeg'
import Weapon from '../../images/weapon.jpg'
import Picolibo from '../../images/picolibo.png'
import LiftLab from '../../images/liftlab.png'
import HamJam from '../../images/hamjam.png'
import WorksItems from './WorksItems.jsx'


const projectData = [
    {
        id: 1,
        image: HamJam,
        title: 'HamJam',
        description: 'HamJam is a full-stack audio hosting web app I built to experiment with file storage, media playback, and containerized deployment. I wanted a place where users could upload, store, and play back their own audio files in a clean interface like a mini personal SoundCloud.',
        tech: 'React.js, Node.js, Express, PostgreSQL, AWS S3, Docker'
    },
    {
        id: 2,
        image: LiftLab,
        title: 'LiftLab',
        description: 'LiftLab is a full-stack web application I built to solve a personal pain point, as I often forgot the weights and reps I used in previous gym sessions. To address this, I created a platform where user can log their workouts and track progress over time.',
        tech: 'React.js, Node.js, Express, MongoDB'
    },
    {
        id:3,
        image: Picolibo,
        title: 'PICOLIBO',
        description: 'PICOLIBO is an innovative workshop app designed by Krux Ventures to empower children to create their own stories using generative AI models. This app offers a hands-on experience, allowing young learners to craft unique narratives and visualize them through AI-generated imagery.',
        tech: 'R, Python, HTML, CSS, JS, Docker, Git, AWS, Nginx',
        web_link: 'https://app.orative.tech/'
    },
    {
        id:4,
        image: Salesy,
        title: 'Salesy',
        description : 'Salesy is an all-in-one tool for NUS canteen vendors whom want to keep track of their tasks, inventory and suppliers. With Salesy, you can expect a good visualization of your inventory and be as efficient as possible with your bookkeeping routines.',
        tech: 'Java, CSS, Git',
        link: 'https://ay2223s1-cs2103t-w08-4.github.io/tp/'
    },
    {
        id:5,
        image:Smart,
        title: 'Smart Suite',
        description : 'Smart Suit is an online ERP software for Singaporean F&B owners developed by Sunpro Inno Apps. Worked on it by implementing user-friendly features, integrating useful APIs, collaborating with senior developers and playing a key role in software testing and quality assurance processes.',
        tech: 'Java, HTML, CSS, JS, MySQL, Spring'
    },
    {
        id:6,
        image: Weapon,
        title: 'Weapon Detector',
        description : 'Weapon Detector is a computer vision project focused on automatically identifying weapons within a dataset of images. We integrated various models like CNN, YOLO, and VGG to enhance the detection process. This project showcases a hands-on exploration of advanced deep learning techniques, combining different architectures.',
        tech: 'Python, Tensorflow, OpenCV'
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