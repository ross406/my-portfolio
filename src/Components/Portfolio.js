import React, { Component } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
class Portfolio extends Component {
  componentDidMount() {
    Aos.init({ duration: 500 });
  }
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return (
          <div key={projects.title} style={{width:"320px", height:'150px',borderRadius:"10px"}} className='columns portfolio-item'>
            <div style={{borderRadius:"10px",display:'flex', justifyContent:'center'}} data-aos='fade-up' className='item-wrap'>
              <a target='_blank' href={projects.url} title={projects.title}>
                <img alt={projects.title} style={{objectFit:'cover',borderRadius:"10px"}} width={"320px"} height={"150px"} src={projectImage} />
                <div className='overlay'>
                  <div className='portfolio-item-meta'>
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
                <div className='link-icon'>
                  <i className='fa fa-link'></i>
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id='portfolio'>
        <div className='row' >
          <div className='twelve columns collapsed'>
            <h1>Check Out Some of My Works.</h1>

            <div
              id='portfolio-wrapper'
              className='bgrid-quarters s-bgrid-thirds cf'
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
