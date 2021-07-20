import React from 'react'
import { Switch, Route, useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Project } from './components/Project'
import { Projects } from './components/Projects'
import { Outreach } from './components/Outreach'

export const Routes = () => {
    const projectName = useLocation().pathname.toString().substring(2);
    return (
        <div>
            <ul>
                <li><Link to='/about'>About</Link></li>
            </ul>
            <Switch>
                <Route path='/about'>
                    <About/>
                </Route>
                <Route path='/projects'>
                    <Projects/>
                </Route>
                <Route path='/projects/:project'>
                    <Project name={projectName}/>
                </Route>
                <Route path='/outreach'>
                    <Outreach/>
                </Route>
                <Route path='/'>
                    <Home/>
                </Route>
            </Switch>
        </div>
    )
}