import React, { Component, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

class About extends Component {
  componentDidMount() {
    Aos.init({ duration: 1000 });
  }

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = 'images/' + this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id='about'>
        <div className='row'>
          <div data-aos='fade-up' className='three columns'>
            <img
              className='profile-pic'
              src={profilepic}
              alt='Roshan Sharma Profile Pic'
            />
          </div>
          <div data-aos='fade-up' className='nine columns main-col'>
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className='row'>
              <div className='columns contact-details'>
                <h2>Contact Details</h2>
                <p className='address'>
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className='columns download'>
                <p>
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href={resumeDownload}
                    className='button'
                  >
                    <i className='fa fa-download'></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
