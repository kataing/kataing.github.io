import React from 'react';

const Repo = (props) => {
  return (
    <span className='repo-container-large'>
      <span className='repo-container-small'>
        <div className='section-subtitle'>
          {props.repo.name}
        </div>
        <a href={props.repo.html_url}>
          <img className='repo-folder' src='images/repo-folder.png' alt='repo-folder' />
        </a>
        <div className='repo-description-container'>
          <a className='repo-link' href={props.repo.html_url}>
            View Repo
          </a>
          <div className='repo-description'>
            {props.repo.description}
          </div>
        </div>
      </span>
    </span>
  )
}

export default Repo;