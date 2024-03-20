import React, { Component, Suspense, lazy } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Portfolio from './Components/Portfolio';
const Footer = lazy(()=> (import('./Components/Footer')));
const About =  lazy(()=>(import('./Components/About')));
const Resume = lazy(()=>(import('./Components/Resume')));
// const Contact = lazy(()=>(import('./Components/Contact')));
const Testimonials = lazy(()=>(import('./Components/Testimonials')));
// const Portfolio = lazy(()=>(import('./Components/Portfolio')));

import { Helmet } from 'react-helmet';

// const Header = lazy(()=>(import('./Components/Header')))

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {},
    };
  }

  getResumeData() {
    $.ajax({
      url: '/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    return (
      <div className='App'>
        <Helmet>
          <title>Roshan Sharma | Full Stack</title>
        </Helmet>
        {/* <Suspense fallback="loading..."> */}
          <Header data={this.state.resumeData.main} />
        {/* </Suspense> */}

        {/* <Suspense fallback="loading...">           */}
          <Portfolio data={this.state.resumeData.portfolio} />
        {/* </Suspense> */}

        <Suspense fallback="loading...">
        <About data={this.state.resumeData.main} />
        </Suspense>

        <Suspense fallback="loading...">          
        <Resume data={this.state.resumeData.resume} />
        </Suspense>

      

        <Suspense fallback="loading...">          
        <Testimonials data={this.state.resumeData.testimonials} />
        </Suspense>

        {/* <Suspense fallback="loading...">
          <Contact data={this.state.resumeData.main} />
        </Suspense> */}

        <Suspense fallback="loading...">
          <Footer data={this.state.resumeData.main} />
        </Suspense>
      </div>
    );
  }
}

export default App;
