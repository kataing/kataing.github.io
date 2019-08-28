import React from 'react';
import { SocialIcon } from 'react-social-icons';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className='menu'>
        <div className='menu-item-container'>
          <a href='#about-me' className='menu-item'>About Me</a>
          <a href='#highlights' className='menu-item'>Highlights</a>
          <a href='#applications' className='menu-item'>Applications</a>
        </div>
        <div className='social-icon-container'>
          <SocialIcon className='social-icon' url='http://linkedin.com/in/kristinataing' />
          <SocialIcon className='social-icon' url='http://github.com/kataing' />
          <SocialIcon className='social-icon' url='https://www.youtube.com/channel/UCVrbpYT1htiM5ZS2MKPyQqQ' />
          <SocialIcon className='social-icon' url='mailto:ktaingdev@gmail.com' />
        </div>
      </section>
    )
  }
}

export default Menu;