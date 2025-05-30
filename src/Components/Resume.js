import React, { Component } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

class Resume extends Component {
  componentDidMount() {
    Aos.init({ duration: 1000 });
  }

  render() {
    if (!this.props.data) return null;

    const { skillmessage, education, work, skills } = this.props.data;

    const educationItems = education.map((edu) => (
      <div key={edu.school}>
        <h3 style={{color:"#f1f1f1"}}>{edu.school}</h3>
        <p className='info' style={{color:"#a4a4a4"}}>
          {edu.degree} <span>&bull;</span>{' '}
          <em className='date'>{edu.graduated}</em>
        </p>
        <p style={{color:"#6e7881"}}>{edu.description}</p>
      </div>
    ));

    const workItems = work.map((job) => (
      <div  key={job.company}>
        <h3 style={{color:"#f1f1f1"}}>{job.company}</h3>
        <p className='info' style={{color:"#a4a4a4"}}>
          {job.title} <span>&bull;</span>{' '}
          <em className='date'>{job.years}</em>
        </p>
        <p style={{color:"#6e7881"}}>{job.description}</p>
      </div>
    ));

    const skillCards = skills.map((skill) => {
      const logo = 'images/logo/' + skill.logo;

      return (
        <div
          key={skill.name}
          style={{
            background: '#111',
            color: '#ccc',
            borderRadius: '10px',
            padding: '20px',
            margin: '10px',
            width: 'calc(33.33% - 20px)',
            // width: '300px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'transform 0.3s ease',
          }}
          className='skill-card'
        >
          <img src={logo} alt={skill.name} style={{ height: '40px', marginBottom: '10px' }} />
          <h4 style={{ marginBottom: '10px',  color: '#fff' }}>{skill.name}</h4>
          <div
            style={{
              width: '100%',
              height: '10px',
              background: '#ccc',
              borderRadius: '5px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: skill.level,
                // background: 'orange',
                transition: 'width 1s ease-in-out',
                background: 'linear-gradient(90deg, #7b2ff7, #f107a3)', 
              }}
            ></div>
          </div>
        </div>
      );
    });

    return (
      <section id='resume' style={{backgroundColor:"#1e1e2f", color:"#f1f1f1"}}>

         {/* Work Section */}
        <div data-aos='fade-up' className='row work'>
          <div className='three columns header-col'>
            <h1>
              <span style={{color:"#f1f1f1"}}>Work</span>
            </h1>
          </div>
          <div className='nine columns main-col'>{workItems}</div>
        </div>

        {/* Education Section */}
        <div data-aos='fade-up' className='row education'>
          <div className='three columns header-col'>
            <h1>
              <span style={{color:"#f1f1f1"}}>Education</span>
            </h1>
          </div>
          <div className='nine columns main-col'>
            <div className='row item'>
              <div className='twelve columns'>{educationItems}</div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div data-aos='fade-up' className='row skill'>
          <div className='three columns header-col'>
            <h1>
              <span style={{color:"#f1f1f1"}}>Skills</span>
            </h1>
          </div>
          <div className='nine columns main-col'>
            <p>{skillmessage}</p>
            <div
              className='skills-grid'
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                width:"100%"
              }}
            >
              {skillCards}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;
