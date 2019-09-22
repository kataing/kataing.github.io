import React from 'react';
import Repo from './repo.jsx';
import axios from 'axios';

class AllRepos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allRepos: [],
      repos: [],
      length: 4
    }
  }

  handleOnClick = (e) => {
    var newLength = this.state.length;
    if(e.target.className === 'repo-button show-more') {
      if (newLength < this.state.allRepos.length) {
        newLength += 4;
      }
    } else if (e.target.className === 'repo-button show-less') {
      if (newLength > 4) {
        newLength -= 4;
      }
    }
    this.setState({
      repos: this.state.allRepos.slice(0, newLength),
      length: newLength
    })
  }

  getRepos = () => {
    axios
      .get('/repos')
      .then(({ data }) => {
        this.setState({
          allRepos: data,
          repos: data.slice(0, this.state.length)
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
            Repos
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
        <div className='repo-button-container'>
          {this.state.length > 4 && <button className='repo-button show-less' onClick={this.handleOnClick}>Show less repos</button>}
          {this.state.length < this.state.allRepos.length && <button className='repo-button show-more' onClick={this.handleOnClick}>Show more repos</button>}
        </div>
      </section>
    )
  }
}

export default AllRepos;