import React from 'react';
import Main from './main.jsx';
import Menu from './menu.jsx';
import AboutMe from './aboutMe.jsx';
import Applications from './applications.jsx';
import AllRepos from './allRepos.jsx';

const App = (props) => {
  return (
    <div>
      <Menu />
      <Main />
      <AboutMe />
      <Applications />
      <AllRepos />
    </div>
  )
}

export default App;