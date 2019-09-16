import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullText: "Welcome to Kristina Taing's Portfolio!",
      displayLength: 0
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

  componentDidMount() {
    this.addLetter();
  }

  render() {
    return (
      <section id='main' className='main'>
        <div className='image-container'>
          <img className='portfolio-image' src='images/portfolio-image.jpg' alt='portfolio-image' />
        </div>
        <div className='main-container'>
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