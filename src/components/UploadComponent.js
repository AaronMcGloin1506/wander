import React, { Component } from "react";
import { Button, Row, Label, Col} from 'reactstrap'
import { Control, LocalForm } from 'react-redux-form';


class Upload extends Component {
    constructor(props) {
        super(props);
 
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current Sate is ' +JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.postTrail(values.trailname, values.author, values.countyId,values.provenceId, values.category, values.terrain, values.rating, values.description)
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
                    <LocalForm onSubmit={(values)=>this.handleSubmit(values)}> 
                        <Row className="form-group center">
                            <Label htmlFor="trailName" md={2}>Trail name</Label>
                            <Col md={4}>
                                <Control.text model=".trailname" id="trailname" name="trailname"
                                    className="form-control"
                                    placeholder="Trail Name"
                                    onChange={this.handleInputChange} />
                            </Col>
                            <Label htmlFor="author" md={2}>Author</Label>
                            <Col md={4}>
                                <Control.text model=".author" id="author" name="author"
                                    className="form-control"
                                    placeholder="Author"
                                    onChange={this.handleInputChange} />
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="county" md={2}>County</Label>
                            <Col md={4}>
                                <Control.select model=".countyId" id="county" name="countyId" className="form-control" onChange={this.handleInputChange}>
                                {this.props.counties.map((county) => (
                                        <option value ={county.id}>{county.name}</option>
                                    ))}
                                </Control.select>
                            </Col>
                            <Label htmlFor="provence" md={2}>Provence</Label>
                            <Col md={4}>
                                <Control.select model =".provenceId"id="provenceId" name="provId" className="form-control" onChange={this.handleInputChange}>
                                {this.props.provences.map((provence) => (
                                        <option value={provence.id}>{provence.name}</option>
                                    ))}
                                </Control.select>
                            </Col>
                        </Row>

                        <Row className="form-group">
                            <Label htmlFor="category" md={2}>Walk Category:</Label>  
                            <Col md={4} >
                                    <Label check>
                                        <Control.radio model=".category" value="Lakes and Rivers" name="category" className="form-control" onChange={this.handleInputChange} /> Lakes and Rivers 
                                    </Label>
                                    <Label check>
                                        <Control.radio model=".category" value ="Mountains" name="category" className="form-control" onChange={this.handleInputChange}/> Mountains
                                    </Label>
                                    <Label check>
                                        <Control.radio model=".category" value ="Coastal" name="category" className="form-control" onChange={this.handleInputChange} /> Coastal
                                    </Label>
                                    <Label check>
                                        <Control.radio model=".catgory" value ="Coastal" name="category" className="form-control" onChange={this.handleInputChange}/> Greenway
                                    </Label>
                            </Col>

                            <Label htmlFor="terrain" md={2}>Trail Terrain:</Label>  
                            <Col md={4}>
                                    <Label check>
                                        <Control.radio model=".terrain" value ="Path" name="terrain" className="form-control" onChange={this.handleInputChange} /> Path
                                    </Label>
                                    <Label check>
                                        <Control.radio model=".terrain" value ="Grass" name="terrain" className="form-control" onChange={this.handleInputChange} /> Grass
                                    </Label>
                               
                                    <Label check>
                                        <Control.radio model=".terrain" value ="Bog" name="terrain" className="form-control" onChange={this.handleInputChange} /> Bog
                                    </Label>
                                
                                    <Label check>
                                        <Control.radio model=".terrain" value ="Rock" name="terrain" className="form-control" onChange={this.handleInputChange} /> Rock
                                    </Label>
                            </Col>
                        </Row>

                        <Row className="form-group">
                        <Label htmlFor="rating" md={2}>Rating:</Label>  
                            <Col md={4}>
                                    <Label check>
                                        <Control.radio model=".rating" value="1" name="rating" className="form-control" onChange={this.handleInputChange} /> 1 star
                                    </Label>
                                
                                    <Label check>
                                        <Control.radio model=".rating" value ="2" name="rating" className="form-control" onChange={this.handleInputChange}/> 2 star
                                    </Label>
                                
                                    <Label check>
                                        <Control.radio model=".rating" value ="3" name="rating" className="form-control" onChange={this.handleInputChange}/> 3 star
                                    </Label>
                                
                                    <Label check>
                                        <Control.radio model=".rating" value ="4" name="rating" className="form-control" onChange={this.handleInputChange}/> 4 star
                                    </Label>
                                
                                    <Label check>
                                        <Control.radio model=".rating" value ="5" name="rating" className="form-control" onChange={this.handleInputChange}/> 5 star
                                    </Label>
                            </Col>

                            <Label htmlFor="description" md={2}>Brief Description:</Label>  
                            <Col md={4}>
                                <Control.textarea model=".description" id="description" name="description"
                                        rows="4" 
                                        className="form-control"
                                        onChange={this.handleInputChange}/>
                            </Col>
                        </Row>
                        <Row className="form-group" row>
                            <Col md={{size:10, offset:1}}>
                                <Button type="submit" color="info">Send Feedback</Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </div>
            </div>
            </>
        );
    }
}

export default Upload;

