import React from 'react';
import Repo from './repo.jsx';
import axios from 'axios';

class AllRepos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: []
    }
  }

  getRepos = () => {
    axios
      .get('/repos')
      .then(({ data }) => {
        this.setState({
          repos: data
        })
      })
      .catch(() => console.log('We were not able to complete your request.'))
  }

  componentDidMount = () => {
    this.getRepos();
  }

  render() {
    return (
      <section id='allRepos' className='section'>
        <h1 className='section-header-container'>
          <span className='section-separator'></span>
          <div className='section-header'>
            All Repos
          </div>
          <span className='section-separator'></span>
        </h1>
        <div className='repo-container'>
          {this.state.repos.map((repo, key) => {
            return (
              <Repo repo={repo} key={key} />
            )
          })}
        </div>
      </section>
    )
  }
}

export default AllRepos;