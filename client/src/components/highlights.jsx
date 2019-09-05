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
              <img className='app-logo' src='./fudFeedLogo.png' />
              <p className='description-container'>
                <a className='repo-link' href='https://github.com/kataing/ingredient-sourcing-app'>
                  View Repo
                  </a>
                <span className='description-new-line'>
                  | React Native | Express | MongoDB | GoogleMapsAPI |
                </span>
                <span className='description-new-line'>
                  A monolithic, mobile app to inspire users with home-made recipes and the ability to search for stores by ingredient
                </span>
                <span className='bullet-point-container'>
                  <span className='description-new-line'>
                    • Integrated Google Maps SDK API to display each store location and associated user rating
                  </span>
                  <span className='description-new-line'>
                    • Designed map component to display search results or local stores if no search is made
                  </span>
                  <span className='description-new-line'>
                    • Designed feed to conditionally expand recipe details and user comments separately
                  </span>
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
            <p className='description-container'>
              <a className='repo-link' href='https://github.com/feat-backendcountry/component-kristina'>
                View Repo
              </a>
              <span className='description-new-line'>
                | React | Express | AWS S3 | MongoDB | HTML5 | CSS3 |
              </span>
              <span className='description-new-line'>
                Developed a front-end replica of the Backcountry website using a Service Oriented Architecture
              </span>
              <span className='bullet-point-container'>
                <span className='description-new-line'>
                  • Specialized in the navigation-bar design and functionality, and hosted images and icons on AWS S3
                  </span>
                <span className='description-new-line'>
                  • Designed a MongoDB schema and seeded 100 sample product entries
                  </span>
                <span className='description-new-line'>
                  • Developed a request to return results from the database related to values typed into the search bar
                  </span>
              </span>
            </p>
          </div>
        </section>
        <section className='section-container-large'>
          <div className='section-container-small'>
            <h1 className='section-subtitle'>
              Mock-teryx System Design
            </h1>
          </div>
          <div className='section-description-long'>
            <p className='description-container'>
              <a className='repo-link' href='https://github.com/caffeine-dependency/component-kristina'>
                View Repo
              </a>
              <span className='description-new-line'>
                | Express | MongoDB | PostgreSQL | AWS EC2 | Artillery.io | Loader.io | Nginx |
              </span>
              <span className='description-new-line'>
                Built, stress-tested, and optimized the back-end architecture for an existing front-end design: an Arc’teryx replica
              </span>
              <span className='bullet-point-container'>
                <span className='description-new-line'>
                  • Constructed a SQL and NoSQL system design to seed 10M entries in 10min and query an entry in 6ms
                  </span>
                <span className='description-new-line'>
                  • Optimized local system to 350 RPS with 2.8ms latency by creating btree indices for both databases
                  </span>
                <span className='description-new-line'>
                  • Achieved 2.5k RPS, 75ms latency, and 0% error rate with round robin load balancing & 4 EC2 instances
                  </span>
              </span>
            </p>
          </div>
        </section>
      </section>
    )
  }
}

export default Highlights;