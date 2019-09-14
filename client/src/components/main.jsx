import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullText: "Welcome to Kristina Taing's Portfolio!",
      displayLength: 0  // Max length is 38
    }
  }

  addLetter() {
    if (this.state.displayLength < 38) {
      this.setState({
        displayLength: this.state.displayLength + 1
      }, () => {
        console.log(this.state.displayLength);
        setInterval(this.addLetter(), 1000);
      })
    }
  }

  componentDidMount() {
    this.addLetter();
  }

  render() {
    return (
      <div id='main' className='main'>
        <div></div>
        <div className='typewriter-container'>
          <span className='intro-text'>
            {this.state.fullText.slice(0, this.state.displayLength)}
          </span>
          <span className='typewriter'></span>
        </div>
        <a href='#about-me' className='down-arrow-container'>
          <img className='down-arrow' src='down-arrow.png' alt='down-arrow'/>
        </a>
      </div>
    )
  }
}

export default Main;