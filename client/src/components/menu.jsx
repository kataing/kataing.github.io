import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { FaBars, FaTintSlash } from 'react-icons/fa';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMobileMenu: false
    }
  }

  handleMobileMenuOnClick = (e) => {
    this.setState({
      displayMobileMenu: !this.state.displayMobileMenu
    })
  }

  displayMobileMenu = () => {
    if (this.state.displayMobileMenu) {
      return (
        <div className='menu-item-container-mobile'>
          <a href='#main' className='menu-item-mobile' onClick={this.handleMobileMenuOnClick} >Home</a>
          <a href='#about-me' className='menu-item-mobile' onClick={this.handleMobileMenuOnClick} >About Me</a>
          <a href='#applications' className='menu-item-mobile' onClick={this.handleMobileMenuOnClick} >Applications</a>
          <a href='#allRepos' className='menu-item-mobile' onClick={this.handleMobileMenuOnClick} >All Repos</a>
        </div>
      )
    }
  }

  handleScroll = () => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('menu').style.top = '0';
      } else {
        document.getElementById('menu').style.top = '-61px';
      }
      prevScrollpos = currentScrollPos;
    }
  }
  
  componentDidMount() {
    this.handleScroll();
  }


  render() {
    return (
      <section id='menu' className='menu'>
        <div className='menu-item-container'>
          <FaBars className='menu-bar-mobile' onClick={this.handleMobileMenuOnClick} />
          <a href='#main' className='menu-item'>Home</a>
          <a href='#about-me' className='menu-item'>About Me</a>
          <a href='#applications' className='menu-item'>Applications</a>
          <a href='#allRepos' className='menu-item'>All Repos</a>
        </div>
        {this.displayMobileMenu()}
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