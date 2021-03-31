import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import {Provences} from '../shared/provences'

function RenderCard({provence}){
    return(
        <div className="col-6 col-md-4 col-lg-3">
            <Card>
                <CardImg src={provence.image} alt="provence1" />
                <CardBody>
                    <CardTitle>{provence.name}</CardTitle>
                    <CardText>{provence.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

class Provence extends Component {
    constructor(props){
        super(props)
        this.state = {
            provences: Provences
        }
    }
    render(){
        return(
            <div>
                <h1>Provence Page</h1>
                <h3>Pick a Provence you would like to explore</h3>
                <div className="container">
                    <div className="row justify-content-center">
                        {this.state.provences.map((provence) => {
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

export default Provence;