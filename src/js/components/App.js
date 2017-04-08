import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import HomePage from './home/HomePage'
import AboutPage from './about/AboutPage'
import CoursesPage from './course/CoursesPage'

class App extends Component {
  render() {
    return (
      <Router path="/">
        <nav>
            <CustomLink to="/" activeOnlyWhenExact={true} label="Home" />
            {" | "} 
            <CustomLink to="/about" activeOnlyWhenExact={true} label="About" />
            {" | "} 
            <CustomLink to="/courses" activeOnlyWhenExact={true} label="Courses" />
          <hr />

          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/courses" component={CoursesPage} />
        </nav>
      </Router>
    );
  }
}

const CustomLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
      <Link to={to} className={match ? 'active' : ''}>{label}</Link>
  )} />
)

export default App;