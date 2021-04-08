import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCard({provence}){
    return(
        <div className="col-6 col-md-4 col-lg-3">
            <Card>
                <Link to={`/counties/${provence.id}`}>
                    <CardImg src={provence.image} alt="provence1" />
                    <CardBody>
                        <CardTitle>{provence.name}</CardTitle>
                        <CardText>{provence.description}</CardText>
                    </CardBody>
                </Link>
            </Card>
        </div>
    );
};

class ProvenceList extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <h1>Provence Page</h1>
                <h3>Pick a Provence you would like to explore</h3>
                <div className="container">
                    <div className="row justify-content-center">
                        {this.props.provences.map((provence) => {
                            return(
                                <RenderCard provence={provence} />
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        )
    }
    
}

export default ProvenceList;