import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addTrail } from '../redux/ActionCreators';


import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import ProvenceList from './ProvenceComponent';
import CountiesList from './CountiesComponents';
import TrailsList from './TrailsComponents';
import Upload from './UploadComponent';

const mapStateToProps = state => {
    return {
        trails: state.trails,
        provences: state.provences,
        counties: state.counties
    }
}

const mapDispatchToProps = (dispatch) => ({
    addTrail: (trailName, author, countyId, provenceId,category, terrain, rating, description) => dispatch(addTrail(trailName, author, countyId, provenceId,category, terrain, rating, description))
})


class Main extends Component {
    constructor(props){
        super(props) 
    }
    render() {

        const HomePage = () => {
            return(
                <Home />
            )
        }
        const CountiesWithId = ({match}) => {
            return(
                
                <CountiesList counties={this.props.counties.filter((county) => county.provId === parseInt(match.params.provenceId,10))}/>
                
            )
        }
        const TrailsWithId = ({match}) => {
            return(
                <TrailsList trails={this.props.trails.filter((trail) => trail.countyId === parseInt(match.params.countyId,10))} />
            )
        }
        return(
            <div>
                <Header />
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route path="/provence" component={() => <ProvenceList provences={this.props.provences}/>} />
                        <Route path="/counties/:provenceId" component={CountiesWithId} />
                        <Route path="/trails/:countyId" component={TrailsWithId}/>
                        <Route path="/upload" component={() => <Upload counties={this.props.counties} provences={this.props.provences} addTrail = {this.props.addTrail}/>} />
                        <Redirect to="home" />
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));