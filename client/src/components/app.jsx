import React from 'react';
import Main from './main.jsx';
import Menu from './menu.jsx';
import AboutMe from './aboutMe.jsx';
import Applications from './applications.jsx';
import AllRepos from './allRepos.jsx';
import Footer from './footer.jsx';

const App = (props) => {
  return (
    <div>
      <Menu />
      <Main />
      <AboutMe />
      <Applications />
      <AllRepos />
      <Footer />
    </div>
  )
}

export default App;