import React, { Component } from 'react';

import Header from './HeaderComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
// import About from './AboutComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';


class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home
                  
                />
              );
        } 

        return (
            <>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path="/contactus" component={Contact}/>
                    <Redirect to='/home'/>
                </Switch>
            </>
        );
    }
}

export default Main;