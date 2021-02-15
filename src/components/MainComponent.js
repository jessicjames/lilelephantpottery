import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
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
                    <Redirect to='/home'/>
                </Switch>
            </>
        );
    }
}

export default Main;