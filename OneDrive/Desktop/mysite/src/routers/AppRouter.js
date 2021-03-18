import React from 'react';
import Header from '../components/header/Header.component'
import Projects from '../components/projects/Projects.component'
import NotFoundPage from '../components/notFoundPage/NotFoundPage.component';
import Home from '../components/home/homePage.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.router.styles.scss'

const AppRouter=()=>{
    return (
      
        <BrowserRouter>
        <div className="main-wrapper">
        <Header />
        <Switch>
       
        <Route path='/' component={Home} exact={true} />
        <Route path='/projects' component={Projects} />
        <Route component={NotFoundPage} />
     
        </Switch>
        </div>
        </BrowserRouter>
       

       )
}

export default AppRouter