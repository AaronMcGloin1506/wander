import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postTrail, fetchCounties, fetchProvences, fetchTrails } from '../redux/ActionCreators';


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
    postTrail: (trailName, author, countyId, provenceId,category, terrain, rating, description) => dispatch(postTrail(trailName, author, countyId, provenceId,category, terrain, rating, description)),
    fetchProvences: () => {dispatch(fetchProvences())},
    fetchCounties: () => {dispatch(fetchCounties())},
    fetchTrails: () => {dispatch(fetchTrails())}
})


class Main extends Component {
    constructor(props){
        super(props) 
    }

    componentDidMount(){
        this.props.fetchProvences();
        this.props.fetchCounties();
        this.props.fetchTrails();
    }

    render() {

        const HomePage = () => {
            return(
                <Home />
            )
        }
        const CountiesWithId = ({match}) => {
            return(
                
                <CountiesList 
                    counties={this.props.counties.counties.filter((county) => county.provId === parseInt(match.params.provenceId,10))}
                    isLoading={this.props.counties.isLoading}
                    errMess={this.props.counties.errMess}/>
                
            )
        }
        const TrailsWithId = ({match}) => {
            return(
                <TrailsList 
                    trails={this.props.trails.trails.filter((trail) => trail.countyId === parseInt(match.params.countyId,10))}
                    isLoading={this.props.trails.isLoading}
                    errMess={this.props.trails.isLoading}
                />
            )
        }
        return(
            <div>
                <Header />
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route path="/provence" 
                            component={() => 
                                    <ProvenceList 
                                        provences={this.props.provences.provences} 
                                        isLoading={this.props.provences.isLoading}
                                        ErrMess={this.props.provences.errMess}
                                    />
                                } 
                        />
                        <Route path="/counties/:provenceId" component={CountiesWithId} />
                        <Route path="/trails/:countyId" component={TrailsWithId}/>
                        <Route path="/upload" component={() => <Upload counties={this.props.counties.counties} provences={this.props.provences.provences} postTrail = {this.props.postTrail}/>} />
                        <Redirect to="home" />
                    </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));