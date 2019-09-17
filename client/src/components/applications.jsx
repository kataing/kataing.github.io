import React from 'react';

const Applications = (props) => {
  return (
    <section id='applications' className='section'>
      <h1 className='section-header-container'>
        <span className='section-separator'></span>
        <div className='section-header'>
          Applications
          </div>
        <span className='section-separator'></span>
      </h1>
      {/* füdFeed Application */}
      <section className='section-container-large'>
        <div className='section-container-small'>
          <h1 className='section-subtitle'>
            füdFeed: A Mobile Recipe App
            </h1>
          <div className='column-to-row-container'>
            <div className='section-description-short description-item'>
              <img className='app-logo' src='images/fudFeedLogo.png' alt='fudFeed logo' />
              <p className='description-container'>
                <a className='repo-link' href='https://github.com/kataing/ingredient-sourcing-app'>
                  View Repo
                </a>
                <span className='description-new-line skills'>
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
                    • Designed map component to conditionally display default search results using componentDidUpdate
                    </span>
                  <span className='description-new-line'>
                    • Designed feed to conditionally expand recipe details and user comments
                    </span>
                </span>
              </p>
            </div>
            <div className='iframe-container description-visual'>
              <iframe src="https://www.youtube.com/embed/jM6ts8k4Al4" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* Mock-teryx Application */}
      <section className='section-container-large'>
        <div className='section-container-small'>
          <h1 className='section-subtitle'>
            Mock-teryx System Design
          </h1>
        </div>
        <div className='diagram-container column-to-row-container'>
          <span className='diagram-item diagram-item-1'>
            <h3 className='diagram-header'>
              Step 1: Inherit a legacy design with 100 sample data records
            </h3>
            <img className='diagram-img-1' src='images/sdc_legacy.png' alt='System Design Diagram 1' />
          </span>
          <span className='diagram-item diagram-item-2'>
            <h3 className='diagram-header'>
              Step 2: Design and test a SQL & NoSQL database locally
            </h3>
            <img className='diagram-img-2' src='images/sdc_local.png' alt='System Design Diagram 2' />
          </span>
          <span className='diagram-item diagram-item-3'>
            <h3 className='diagram-header'>
              Step 3: Deploy preferred database design and scale with an Nginx load balancer and additional EC2 instances
            </h3>
            <img className='diagram-img-3' src='images/sdc_design.png' alt='System Design Diagram 3' />
          </span>
        </div>
        <div className='section-description-long'>
          <p className='description-container'>
            <a className='repo-link' href='https://github.com/caffeine-dependency/component-kristina'>
              View Repo
            </a>
            <span className='description-new-line  skills'>
              | Express | MongoDB | PostgreSQL | AWS EC2 | Loader.io | Nginx |
            </span>
            <span className='description-new-line'>
              Built, stress-tested, and optimized the back-end architecture for an existing front-end design: an Arc’teryx replica
            </span>
            <span className='bullet-point-container'>
              <span className='description-new-line'>
                • Constructed a SQL and NoSQL system design to seed 10M entries in 10min and query an entry in 6ms
              </span>
              <span className='description-new-line'>
                • Optimized query times by 25s in the SQL system and 30s in the NoSQL system by using btree indices
              </span>
              <span className='description-new-line'>
                • Designed a local system that reached 350 RPS with 2.8ms latency, & 0% error rate
              </span>
              <span className='description-new-line'>
                • Deployed 4 EC2 instances with 2.5k RPS, 75ms latency, & 0% error rate with round robin load balancing
              </span>
            </span>
          </p>
        </div>
      </section>
      {/* Front-End Country Application */}
      <section className='section-container-large'>
        <div className='section-container-small'>
          <div className='column-to-row-container'>
            <div className='backcountry-item'>
              <div className='section-subtitle'>
                Front-End Country: A Backcountry.com Replica
              </div>
              <div className='iframe-container description-visual backcountry-video'>
                <iframe src="https://www.youtube.com/embed/VBUTHrku_d4" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
            <a className='backcountry-item description-item' href='https://www.backcountry.com/fjallraven-vidda-pro-pant-mens?skid=FJR00EP-DAROV-USS37EUS54&ti=UExQIENhdDpNZW4ncyBQYW50czoxOjU6YmMtbWVucy1wYW50cw=='>
              <div className='section-subtitle backcountry-text'>
                Backcountry Website
              </div>
              <img className='backcountry-img' src='images/Backcountry.png' alt='Backcountry Website' />
            </a>
          </div>
        </div>
        <div className='section-description-long'>
          <p className='description-container'>
            <a className='repo-link' href='https://github.com/feat-backendcountry/component-kristina'>
              View Repo
            </a>
            <span className='description-new-line  skills'>
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
                • Designed a MongoDB schema with additional nested schemas and seeded 100 sample product entries
              </span>
              <span className='description-new-line'>
                • Developed a request to return results from the database related to values typed into the search bar
              </span>
            </span>
          </p>
        </div>
      </section>
    </section>
  )
}

export default Applications;