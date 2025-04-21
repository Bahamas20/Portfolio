import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import './Experiences.css'
import ExperienceItems from './ExperienceItems';
import Visenze from '../../images/visenze_logo.png';
import Krux from '../../images/krux_logo.jpeg';
import Sunpro from '../../images/sunpro_logo.jpg'


const experienceData = [
  {
    id: 1,
    logo: Visenze,
    companyTitle: 'ViSenze Pte Ltd',
    role: 'Software Engineer Intern',
    date: 'Jan 2025 – Present',
    description:
      "Focused on full-stack development for visual search tools and Shopify apps, building dynamic UI components, backend APIs, and automation scripts to enhance user onboarding and app reliability.",
    tech: 'React.js, Node.js, Python, GraphQL, PostgreSQL, Liquid, Polaris, Git, Docker'
  },
  {
    id: 2,
    logo: Krux,
    companyTitle: 'Krux Ventures Pte Ltd',
    role: 'Machine Learning Intern',
    date: 'Jul 2024 – Dec 2024',
    description:
      "Worked on full-stack development of the Picolibo website, deploying generative models and building FastAPI services. Scaled internal tools with Docker and AWS infrastructure.",
    tech: 'Python, FastAPI, StableDiffusion, Docker, AWS, ShinyProxy, OpenAI, HTML/CSS'
  },
  {
    id: 3,
    logo: Sunpro,
    companyTitle: 'Sunpro Inno Apps Pte Ltd',
    role: 'Software Engineer Intern',
    date: 'May 2023 – Aug 2023',
    description:
      "Contributed primarily to backend development for ERP systems, improving data workflows, integrating APIs, and resolving system bugs to enhance stability and efficiency.",
    tech: 'Java, MSSQL, Apache Commons, REST API, HTML/CSS, QA Testing'
  }
];


function Experiences() {
  return (
    <section className='experiences' id='experience'> 
      <h2 className="section_title font-mont">Experience</h2>
      <div className='timeline-div'>
      <Timeline position="alternate">
        {experienceData.map((exp, index) => {
          return (      
          <TimelineItem sx={{ minHeight: '320px' }}>
            <TimelineOppositeContent>{exp.date}</TimelineOppositeContent>
            <TimelineSeparator>
              {index === 0 ? <TimelineDot className='timeline-dot'/> : <TimelineDot className='timeline-dot-outlined' variant='outlined'/> }            
              {index !== experienceData.length - 1 ? <TimelineConnector /> : null}
            </TimelineSeparator>
            <TimelineContent>
              <ExperienceItems exp={exp}></ExperienceItems>
            </TimelineContent>
          </TimelineItem>)
        })}
        </Timeline>
      </div>
      </section>
  );
}

export default Experiences