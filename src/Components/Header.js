import React, { Component } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
class Header extends Component {
  componentDidMount() {
    Aos.init({ duration: 2000 });
  }

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name} 
          style={{
            background: 'linear-gradient(90deg, #ff4e50, #f9d423)',
            // background: 'linear-gradient(90deg, #007cf0, #00dfd8)', 
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            textShadow:'none'
          }}>
            <a target='_blank' href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id='home'>
        <nav id='nav-wrap'>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
          <a className='mobile-btn' href='#home' title='Hide navigation'>
            Hide navigation
          </a>

          <ul id='nav' className='nav'>
            <li className='current'>
              <a className='smoothscroll' href='#home'>
                Home
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#portfolio'>
                Works
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#about'>
                About
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#resume'>
                Resume
              </a>
            </li>

            <li>
              <a className='smoothscroll' href='#testimonials'>
                Testimonials
              </a>
            </li>
          </ul>
        </nav>

        <div className='row banner'>
          <div className='banner-text'>
            <h1 className='responsive-headline' style={{
              // background: 'linear-gradient(90deg, #ff5fad, #8f6ed5, #5ec5ff)',
              background: 'linear-gradient(90deg, #7b2ff7, #f107a3)', // purple to pink
              // background: 'linear-gradient(90deg, #007cf0, #00dfd8)', 
              // background: 'linear-gradient(90deg, #ff4e50, #f9d423)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              textShadow:'none'
            }}>
              I'm {name}.
            </h1>
            <h3 style={{
              // background: 'linear-gradient(90deg, #ff4e50, #f9d423)',
              background: 'linear-gradient(90deg, #007cf0, #00dfd8)', 
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              textShadow:'none'
            }}>
             <span>{occupation}</span>. Specializing in {description}.
            </h3>
            <hr />
            <ul data-aos='fade-up' className='social'>
              {networks}
            </ul>
          </div>
        </div>

        <p className='scrolldown'>
          <a className='smoothscroll' href='#portfolio'>
            <i className='icon-down-circle'></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
