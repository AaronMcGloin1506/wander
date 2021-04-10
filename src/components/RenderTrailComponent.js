import React, { Component } from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Modal, ModalHeader, ModalBody} from 'reactstrap';

function StarRating(rating){
    if(rating === 1){
        return(
            <CardText>
                <i class="fa fa-star text-warning" aria-hidden="true"></i>
            </CardText>
        )
    }
    else if(rating === 2){
        return(
            <CardText>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
            </CardText>
        )
    }
    else if(rating === 3){
        return(
            <CardText>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
            </CardText>
        )
    }
    else if(rating === 4){
        return(
            <CardText>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
            </CardText>
        )
    }

    else if(rating === 5){
        return(
            <CardText>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
                <i className="fa fa-star text-warning" aria-hidden="true"></i>
            </CardText>
        )
    }
}

class RenderTrail extends Component{
    constructor(props){
        super(props);

        this.state ={
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    render(){
        return(
            <>
                <div className="col-6 col-md-4 col-lg-3">
                    <a style={{ cursor: 'pointer' }} onClick={this.toggleModal}>
                    <Card>
                        <CardImg src={this.props.trail.image} alt={this.props.trail.name} />
                        <CardBody>
                            <CardTitle>{this.props.trail.name}</CardTitle>
                            {StarRating(this.props.trail.rating)}
                        </CardBody>
                    </Card>
                </a>
            </div>
            <Modal size="lg" isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader style={{ background: '#9EE4D6' }} isOpen={this.state.isModalOpen} toggle={this.toggleModal}>{this.props.trail.name}</ModalHeader>
                <ModalBody style={{ background: '#9EE4D6' }}>
                    <div classname="container">
                        <div className="row justify-content-center">
                            <div className="col-sm-12 col-md-8">
                                <img width="100%" src={this.props.trail.map} alt={this.props.trail.name}/>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-6" align="right">
                                <p><strong>Walk Category: </strong>{this.props.trail.category}</p>
                            </div>
                            <div className="col-6" align="left">
                                <p><strong>Walking Terrain: </strong>{this.props.trail.terrain}</p>
                            </div>
                            <div className="col-12" align="center">
                                <p><strong>Brief Description: </strong></p>
                            </div>
                            <div className="col-12" align="center">
                                <p>{this.props.trail.description}</p>
                            </div>
                            <div className="col-12" align="center">
                                {StarRating(this.props.trail.rating)}
                            </div>
                        </div>
                    </div>
                    
                </ModalBody>
            </Modal>
        </>
        )
    }
}

export default RenderTrail;