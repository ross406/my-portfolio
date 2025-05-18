import React, { Component } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Portfolio.css';

class Portfolio extends Component {
  componentDidMount() {
    Aos.init({ duration: 500 });
  }

  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (project) {
      const projectImage = 'images/portfolio/' + project.image;

      return (
        <div
          key={project.title}
          style={{
            width: '320px',
            borderRadius: '12px',
            overflow: 'hidden',
            background: '#1f1f2e',
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
            display: 'flex',
            flexDirection: 'column',
          }}
          className='portfolio-item'
          data-aos='fade-up'
        >
          <img
            alt={project.title}
            src={projectImage}
            style={{
              width: '100%',
              height: '180px',
              objectFit: 'cover',
            }}
          />
          <div
            style={{
              padding: '16px',
              backgroundColor: '#1f1f2e',
              color: '#f1f1f1',
              flexGrow: 1,
            }}
          >
            <h3 style={{ margin: '0 0 8px', fontSize: '18px', color: '#fff' }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '14px', color: '#ccc' }}>{project.category}</p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '15px', flexWrap: 'wrap' }}>
              <a
                href={project.url}
                target='_blank'
                rel='noopener noreferrer'
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  backgroundColor: '#28a745',
                  color: '#fff',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '17px',
                  fontWeight: 800,
                  transition: 'background-color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#218838')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#28a745')}
              >
                <i className='fa fa-external-link'></i>
                Visit Site
              </a>

              {project.github && (
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    backgroundColor: '#28a745',
                    color: '#fff',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: '17px',
                    fontWeight: 800,
                    transition: 'background-color 0.2s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#218838')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#28a745')}
                >
                  <i className='fa fa-github' aria-hidden='true'></i>
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      );
    });

    return (
      <section id='portfolio' style={{ background: '#1e1e2f', padding: '60px 0' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 20px',
            boxSizing: 'border-box',
            overflowY: 'hidden',
          }}
        >
          <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '40px' }}>
            Check Out Some of My Works
          </h1>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '30px',
              boxSizing: 'border-box',
               overflowY: 'hidden',
            }}
          >
            {projects}
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
