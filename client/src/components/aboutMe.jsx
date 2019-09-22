import React from 'react';

const AboutMe = (props) => {
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
          <h1 className='section-subtitle'>
            Kristina Taing: Software Engineer
          </h1>
          <div className='column-to-row-container'>
            <div className='iframe-container description-visual'>
              <iframe src="https://www.youtube.com/embed/7k3XS0FrShE" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className='section-description-short description-item'>
              <div className='description-container'>
                <div className='skills-logo-container'>
                  <img className='skills-logo' src='/images/javascript-icon.png' alt='javascript-icon' />
                  <img className='skills-logo' src='/images/html-icon.png' alt='html-icon' />
                  <img className='skills-logo' src='/images/css-icon.png' alt='css-icon' />
                  <img className='skills-logo' src='/images/react-icon.png' alt='react-icon' />
                  <img className='skills-logo' src='/images/postgresql-icon.png' alt='postgresql-icon' />
                  <img className='skills-logo' src='/images/mysql-icon.png' alt='mysql-icon' />
                  <img className='skills-logo' src='/images/mongodb-icon.png' alt='mongodb-icon' />
                  <img className='skills-logo' src='/images/amazon-ec2-icon.png' alt='amzaon-ec2-icon' />
                </div>
                <div>
                  Hello! Thank you for taking the time to be here today. If you play the video, I'll explain why I'm a Software Engineer.
                  </div>
                <div className='description-new-line'>
                  I'm a UC Santa Barbara graduate, based in Southern California, but I also have a love for the Bay Area.
                  In my spare time, I've...
                  </div>
                <div className='bullet-point-container'>
                  <div className='description-new-line'>
                    • volunteered for the Bay Area Science Festival to demonstrate fundamental science experiments to children
                    </div>
                  <div className='description-new-line'>
                    • forced my friends to eat Korean Fried Chicken and pizza for my birthday
                    </div>
                  <div className='description-new-line'>
                    • planted an avocado pit that will hopefully bear fruit in 7-10 years
                    </div>
                  <div className='description-new-line'>
                    • dragged my family members to join me at our local gym
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default AboutMe;