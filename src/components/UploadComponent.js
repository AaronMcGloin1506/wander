import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col} from 'reactstrap'


class Upload extends Component {
    constructor(props) {
        super(props);

        this.state={
            form: { 
                trailName: '',
                author: '',
                countyId: 0,
                provId: 0,
                rating: 0,
                description: '',
                image: '../assets/images/trail.jpg',
                map: '../assets/images/Glencar.jpg',
                category: '',
                grade: '',
                terrain: '',
                waymarking: '',
                trailhead: '',
                length: '',
                ascent: '',
                time: '',
                longtitude: '',
                latitude: ''
            },
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('Current Sate is ' +JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render(){
        return(
            <>
            <h1>Upload Page</h1>
            <div className="row justify-content-center">
                <div className="col-12">
                    <h3>Please fill out trail details</h3>
                </div>
                <div className="col-12 col-md-9 ">
                    <Form onSubmit={this.handleSubmit}> 
                        <FormGroup row className="center">
                            <Label htmlFor="trailName" md={2}>Trail name</Label>
                            <Col md={4}>
                                <Input type="text" id="trailName" name="trailName"
                                    placeholder="Trail Name"
                                    value={this.state.form.firstname}
                                    onChange={this.handleInputChange} />
                            </Col>
                            <Label htmlFor="author" md={2}>Author</Label>
                            <Col md={4}>
                                <Input type="text" id="author" name="author"
                                    placeholder="Author"
                                    onChange={this.handleInputChange} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="county" md={2}>County</Label>
                            <Col md={4}>
                                <Input type="select" id="county" name="county" onChange={this.handleInputChange}>
                                {this.props.counties.map((county) => (
                                        <option value ={county.id}>{county.name}</option>
                                    ))}
                                </Input>
                            </Col>
                            <Label htmlFor="provence" md={2}>Provence</Label>
                            <Col md={4}>
                                <Input type="select" id="provence" name="provence" onChange={this.handleInputChange}>
                                {this.props.provences.map((provence) => (
                                        <option value ={provence.id}>{provence.name}</option>
                                    ))}
                                </Input>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="category" md={2}>Walk Category:</Label>  
                            <Col md={4}>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" value ="Lakes and Rivers" onChange={this.handleInputChange} /> Lakes and Rivers
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" value ="Mountains" onChange={this.handleInputChange} /> Mountains
                                    </Label>
                                    </FormGroup>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" onChange={this.handleInputChange} /> Coastal
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" onChange={this.handleInputChange} /> Greenway
                                    </Label>
                                </FormGroup>
                            </Col>

                            <Label htmlFor="terrain" md={2}>Trail Terrain:</Label>  
                            <Col md={4}>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" onChange={this.handleInputChange} /> Path
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" onChange={this.handleInputChange} /> Grass
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" onChange={this.handleInputChange} /> Bog
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" onChange={this.handleInputChange} /> Rock
                                    </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                        <Label htmlFor="rating" md={2}>Rating:</Label>  
                            <Col md={4}>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" /> 1 star
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" /> 2 star
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" /> 3 star
                                    </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                    <Label check>
                                        <Input type="radio" /> 4 star
                                    </Label>
                                </FormGroup>
                            </Col>

                            <Label htmlFor="rating" md={2}>Brief Description:</Label>  
                            <Col md={4}>
                                <Input type="textarea" model=".message" id="message" name="message"
                                        rows="4" 
                                        className="form-control"/>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:10, offset:1}}>
                                <Button type="submit" color="info">Send Feedback</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
            </>
        );
    }
}

export default Upload;

