import React from 'react';
import { SocialIcon } from 'react-social-icons';

class Highlights extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id='highlights' className='section'>
        <h1 className='section-header-container'>
          <span className='section-separator'></span>
          <div className='section-header'>
            Highlights
          </div>
          <span className='section-separator'></span>
        </h1>
        {/* füdFeed Application */}
        <section className='section-container-large'>
          <div className='section-container-small'>
            <div className='section-description-short'>
              <h1 className='section-subtitle'>
                füdFeed: A Mobile Recipe App
              </h1>
              <div className='app-logo-container'>
                <img className='app-logo' src='./fudFeedLogo.png' />
              </div>
              <p>
                <span className='skills-text'>
                  <a className='repo-link' href='https://github.com/kataing/ingredient-sourcing-app'>
                    View Repo
                </a>
                  | React Native | Express | MongoDB | GoogleMapsAPI |
                </span>
                <span>
                  this is a description
                </span>
              </p>
            </div>
            <div>
              <iframe src="https://www.youtube.com/embed/jM6ts8k4Al4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </section>
        {/* Front-End Country Application */}
        <section className='section-container-large'>
          <div className='section-container-small'>
            <a href='https://www.backcountry.com/fjallraven-vidda-pro-pant-mens?skid=FJR00EP-DAROV-USS37EUS54&ti=UExQIENhdDpNZW4ncyBQYW50czoxOjU6YmMtbWVucy1wYW50cw=='>
              <div className='section-subtitle backcountry-text'>
                Backcountry Website
              </div>
              <img width="650" height="400" src='./Backcountry.png' />
            </a>
            <div>
              <div className='section-subtitle'>
                Front-End Country: A Backcountry.com Replica
              </div>
              <iframe src="https://www.youtube.com/embed/VBUTHrku_d4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
          <div className='section-description-long'>
            <div>
              <div className='skills-text'>
                <a className='repo-link' href='https://github.com/feat-backendcountry/component-kristina'>
                  View Repo
                </a>
                | React | Express | AWS S3 | MongoDB | HTML5 | CSS3 |
              </div>
              Developed a front-end replica of the Backcountry website, specializing in the navigation-bar micro service
              •	Replicated the navigation-bar design and functionality, and hosted images and icons on AWS S3
              •	Designed a MongoDB schema and seeded 100 sample product entries
              •	Developed a query to return results from the database related to values typed into the search bar
              </div>
          </div>
        </section>
        <section className='section-container-large'>
          <div className='section-container-small'>
            <h1 className='section-subtitle'>
              Mock-teryx System Design
            </h1>
          </div>
          <div className='section-description-long'>
            <div>
              <div className='skills-text'>
                <a className='repo-link' href='https://github.com/caffeine-dependency/component-kristina'>
                  View Repo
                </a>
                | Express | MongoDB | PostgreSQL | AWS EC2 | Artillery.io | Loader.io | Nginx |
              </div>
              Built, stress-tested, and optimized the back-end architecture for an existing front-end design: an Arc’teryx replica
              •	Constructed a SQL and NoSQL system design to seed 10M entries in 10min and query an entry in 6ms
              •	Optimized local system to 350 RPS with 2.8ms latency by creating indexes for both database designs
              •	Achieved 2.5k RPS, 75ms latency, and 0% error rate with round robin load balancing & 4 EC2 instances
              </div>
          </div>
        </section>
      </section>
    )
  }
}

export default Highlights;