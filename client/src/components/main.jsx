import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullText: "Welcome to Kristina Taing's Portfolio!",
      displayLength: 0,
      loading: true,
      loadedImages: 0
    }
    this.addLetter = this.addLetter.bind(this);
  }

  addLetter() {
    this.setState({
      displayLength: this.state.displayLength + 1
    }, () => {
      if (this.state.displayLength < this.state.fullText.length) {
        setTimeout(this.addLetter, 120);
      }
    })
  }

  handleImageLoad = () => {
    this.setState({
      loadedImages: this.state.loadedImages + 1
    }, () => {
      if(this.state.loadedImages === 2) {
        this.setState({
          loading: false
        }, () => {
          this.addLetter();
        })
      }
    })
  }

  handleImageError = () => {
    this.setState({
      loadedImages: 0
    })
  }

  displayLoadingPage = () => {
    if (this.state.loading) {
      return(
        <section className='loading-page'>
          <img className='loading-spinner' src='/images/loading-spinner.gif' alt='loading-spinner' />
          <span>Just making sure the page is perfect for you</span>
        </section>
      )
    }
  }

  render() {
    return (
      <section id='main' className='main'>
        {this.displayLoadingPage()}
        <div className='image-container-desktop'>
          <img className='portfolio-image' src='images/portfolio-image.jpg' onLoad={this.handleImageLoad} onError={this.handleImageError} alt='portfolio-image' />
        </div>
        <div className='main-container'>
          <div className='image-container-mobile'>
            <img className='portfolio-image' src='images/portfolio-image.jpg' onLoad={this.handleImageLoad} onError={this.handleImageError} alt='portfolio-image' />
          </div>
          <div className='typewriter-container'>
            <span className='intro-text'>
              {this.state.fullText.slice(0, this.state.displayLength)}
            </span>
            <span className='typewriter'></span>
          </div>
          <a href='#about-me' className='down-arrow-container'>
            <img className='down-arrow' src='images/down-arrow.png' alt='down-arrow' />
          </a>
        </div>
      </section>
    )
  }
}

export default Main;