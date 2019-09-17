import React from 'react';
import Main from './main.jsx';
import Menu from './menu.jsx';
import AboutMe from './aboutMe.jsx';
import Highlights from './highlights.jsx';
import Applications from './applications.jsx';

const App = (props) => {
  return (
    <div>
      <Menu />
      <Main />
      <AboutMe />
      <Highlights />
      <Applications />
    </div>
  )
}

export default App;