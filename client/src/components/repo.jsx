import React from 'react';

const Repo = (props) => {
  return (
    <span className='repo-container-large'>
      <span className='repo-container-small'>
        <div className='section-subtitle'>
          {props.repo.full_name}
        </div>
        <a className='repo-link' href='https://github.com/feat-backendcountry/component-kristina'>
          View Repo
        </a>
      </span>
    </span>
  )
}

export default Repo;