import React from 'react';
import Repo from './repo.jsx';
import sampleData from './sampleData.jsx';

class Applications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: ['hello', 'hello2']
    }
  }

  componentDidMount = () => {
    this.setState({
      repos: sampleData
    })
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
        <div className='repo-container'>
          {this.state.repos.map((repo, key) => {
            return(
              <Repo repo={repo} key={key}/>
            )
          })}
        </div>
      </section>
    )
  }
}

export default Applications;