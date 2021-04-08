import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCard({county}){
    return(
        <div className="col-6 col-md-4 col-lg-3">
            <Card>
                <Link to={`/trails/${county.id}`}>
                    <CardImg src={county.image} alt={county.name} />
                    <CardBody>
                        <CardTitle>{county.name}</CardTitle>
                        <CardText>{county.description}</CardText>
                    </CardBody>
                </Link>
            </Card>
        </div>
    );
};

class CountiesList extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            <h1>{this.props.counties.name}</h1>
                <h3>Pick a County you would like to explore</h3>
                <div className="container">
                    <div className="row justify-content-center">
                        {this.props.counties.map((county) => {
                            return(
                                <RenderCard county={county} />
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default CountiesList;