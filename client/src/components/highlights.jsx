import React from 'react';

class Highlights extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id='highlights' className='section'>
        <h1 className='section-header'>Highlights</h1>
        {/* füdFeed Application */}
        <section className='section-inner-container'>
          <div className='highlights-container'>
            <div>
              <div className='section-subtitle'>
                  füdFeed
              </div>
              <iframe src="https://www.youtube.com/embed/jM6ts8k4Al4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className='section-description-short'>
              <div>
                |React Native|Express|MongoDB|GoogleMapsAPI|
                A monolithic, mobile app to inspire users with home-made recipes and the ability to search for stores by ingredient
                •	Integrated Google Maps SDK API to display each store location and associated user rating
                •	Designed map component to display search results or local stores if no search is made
                •	Designed feed to conditionally expand recipe details and user comments separately
              </div>
            </div>
          </div>
        </section>
        {/* Front-End Country Application */}
        <section className='section-inner-container'>
          <div className='highlights-container'>
            <div>
              <div className='section-subtitle'>
                Front-End Country: A Backcountry.com Replica
              </div>
              <iframe src="https://www.youtube.com/embed/VBUTHrku_d4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <a href='https://www.backcountry.com/fjallraven-vidda-pro-pant-mens?skid=FJR00EP-DAROV-USS37EUS54&ti=UExQIENhdDpNZW4ncyBQYW50czoxOjU6YmMtbWVucy1wYW50cw=='>
              <div className='section-subtitle'>
                Backcountry Website
              </div>
              <img width="650" height="400" src='./Backcountry.png' />
            </a>
          </div>
          <div className='section-description-long'>
            <div>
              |React|Express|AWS S3|MongoDB|HTML5|CSS3|
              Developed a front-end replica of the Backcountry website, specializing in the navigation-bar micro service
              •	Replicated the navigation-bar design and functionality, and hosted images and icons on AWS S3
              •	Designed a MongoDB schema and seeded 100 sample product entries
              •	Developed a query to return results from the database related to values typed into the search bar
              </div>
          </div>
        </section>

      </section>
    )
  }
}

export default Highlights;