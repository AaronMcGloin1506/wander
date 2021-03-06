import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';

import { Loading } from '../components/LoadingComponent';

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

function CountiesList({counties, isLoading, errMess}){

        if(isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
                
            )
        }

        else if(errMess){
            return(
                <div className="container">
                    <div className="row">
                        <h4>{this.props.errMess}</h4>
                    </div>
                </div>
                
            )
        }
        else if(counties !=null)
        return(
            <div>
            {/* <h1>{this.props.provence.name}</h1> */}
                <h3>Pick a County you would like to explore</h3>
                <div className="container">
                    <div className="row justify-content-center">
                        {counties.map((county) => {
                            return(
                                <RenderCard county={county} />
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        );
    }


export default CountiesList;