import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { Project } from './pages/Project'
import { Outreach } from './pages/Outreach'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/about'>
            <About/>
        </Route>
        <Route exact path='/projects'>
            <Projects/>
        </Route>
        <Route exact path='/projects/:project'>
            <Project/>
        </Route>
        <Route exact path='/outreach'>
            <Outreach/>
        </Route>
        <Route path='/'>
            <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
