import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Provence from './ProvenceComponent';
import Counties from './CountiesComponents';

import {Provences} from '../shared/provences';




class Main extends Component {
    constructor(props){
        super(props)

        this.state = {
            provences: Provences
        }
    }
    render() {

        const HomePage = () => {
            return(
                <Home />
            )
        }
        const CountiesWithId = ({match}) => {
            return(
                
                <Counties counties={this.state.provences.filter((provence) => provence.id === parseInt(match.params.provenceId,10))[0]} />
                
            )

        }
        return(
            <div>
                <Header />
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route path="/provence" component={() => <Provence provences={this.state.provences}/>} />
                        <Route path="/counties/:provenceId" component={CountiesWithId} />
                        <Redirect to="home" />
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;