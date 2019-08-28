import React from 'react';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id='about-me' className='section'>
        <h1 className='section-header'>About Me</h1>
        <section className='section-inner-container'>
          <div className='highlights-container'>
            <div className='section-description-short'>
              <div>
                Kristina Taing
              </div>
              <div>
                Software Engineer
              </div>
            </div>
            <div>
              <div className='section-subtitle'>
                Some Sort of Heading
              </div>
              <iframe src="https://www.youtube.com/embed/7k3XS0FrShE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </section>
      </section>
    )
  }
}

export default AboutMe;