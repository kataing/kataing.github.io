import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { FaBars } from 'react-icons/fa';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  handleOnClick = (e) => {
    console.log(e.target.value);
    console.log('click');
  }

  render() {
    return (
      <section className='menu'>
        <div className='menu-item-container'>
          <FaBars className='menu-mobile' onClick={this.handleOnClick}/>
          <a href='#main' className='menu-item'>Home</a>
          <a href='#about-me' className='menu-item'>About Me</a>
          <a href='#highlights' className='menu-item'>Highlights</a>
          <a href='#applications' className='menu-item'>Applications</a>
        </div>
        <div className='social-icon-container'>
          <SocialIcon className='social-icon' bgColor='#333' url='http://linkedin.com/in/kristinataing' />
          <SocialIcon className='social-icon' bgColor='#333' url='http://github.com/kataing' />
          <SocialIcon className='social-icon' bgColor='#333' url='https://www.youtube.com/channel/UCVrbpYT1htiM5ZS2MKPyQqQ' />
          <SocialIcon className='social-icon' bgColor='#333' url='mailto:ktaingdev@gmail.com' />
        </div>
      </section>
    )
  }
}

export default Menu;