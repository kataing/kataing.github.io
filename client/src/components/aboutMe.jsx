import React from 'react';

import { IoLogoJavascript } from 'react-icons/io';
import { IoLogoCss3 } from 'react-icons/io';
import { IoLogoHtml5 } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { IoLogoGithub } from 'react-icons/io';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id='about-me' className='section'>
        <h1 className='section-header-container'>
          <span className='section-separator'></span>
          <div className='section-header'>
            About Me
          </div>
          <span className='section-separator'></span>
        </h1>
        <section className='section-container-large'>
          <div className='section-container-small'>
            <div className='section-description-short'>
              <h1 className='section-subtitle'>
                Kristina Taing
              </h1>
              <div>
                Software Engineer
              </div>
              <div className='skills-logo-container'>
                <IoLogoJavascript className='skills-logo' />
                <IoLogoHtml5 className='skills-logo' />
                <IoLogoCss3 className='skills-logo' />
                <FaReact className='skills-logo' />
                <IoLogoGithub className='skills-logo' />
              </div>
            </div>
            <div>
              <iframe src="https://www.youtube.com/embed/7k3XS0FrShE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </section>
      </section>
    )
  }
}

export default AboutMe;