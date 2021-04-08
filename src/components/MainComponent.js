import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import ProvenceList from './ProvenceComponent';
import CountiesList from './CountiesComponents';
import TrailsList from './TrailsComponents';
import Upload from './UploadComponent'

import {Provences} from '../shared/provences';
import {Counties} from '../shared/counties';
import {Trails} from '../shared/trails';



class Main extends Component {
    constructor(props){
        super(props)

        this.state = {
            provences: Provences,
            counties: Counties,
            trails: Trails
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
                
                <CountiesList counties={this.state.counties.filter((county) => county.provId === parseInt(match.params.provenceId,10))}/>
                
            )
        }
        const TrailsWithId = ({match}) => {
            return(
                <TrailsList trails={this.state.trails.filter((trail) => trail.countyId === parseInt(match.params.countyId,10))} />
            )
        }
        return(
            <div>
                <Header />
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route path="/provence" component={() => <ProvenceList provences={this.state.provences}/>} />
                        <Route path="/counties/:provenceId" component={CountiesWithId} />
                        <Route path="/trails/:countyId" component={TrailsWithId}/>
                        <Route path="/upload" component={() => <Upload counties={this.state.counties} />} />
                        <Redirect to="home" />
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;