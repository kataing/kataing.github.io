import React from 'react';
import Main from './main.jsx';
import Menu from './menu.jsx';
import AboutMe from './aboutMe.jsx';
import Highlights from './highlights.jsx';
import Applications from './applications.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Main />
        <Menu />
        <AboutMe />
        <Highlights />
        <Applications />
      </div>
    )
  }
}

export default App;