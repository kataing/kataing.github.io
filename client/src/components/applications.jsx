import React from 'react';

class Applications extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id='applications' className='section'>
         <h1 className='section-header-container'>
        <span className='section-separator'></span>
          <div className='section-header'>
            Applications
          </div>
          <span className='section-separator'></span>
        </h1>
      </section>
    )
  }
}

export default Applications;