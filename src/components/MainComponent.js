import React, { Component } from 'react';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Provence from './ProvenceComponent';

import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
    render() {

        const HomePage = () => {
            return(
                <Home />
            )
        }
        return(
            <div>
                <Header />
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route path="/provence" component={Provence} />
                        <Redirect to="home" />
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;