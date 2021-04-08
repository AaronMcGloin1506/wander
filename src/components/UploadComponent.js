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
                image: '',
                map: '',
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
        }
    }
    render(){
        return(
            <>
            <h1>Upload Page</h1>
            <div className="row">
                <div className="col-12">
                    <h3>Please fill out trail details</h3>
                    {this.props.counties.map((county) => <p>{county.name}</p>)}
                </div>
                <div className="col-12 col-md-9">
                    <Form>

                        <FormGroup row>
                            <Label htmlFor="trailName" md={2}> Trail name</Label>
                            <Col md={4}>
                                <Input type="text" id="trailName" name="trailName"
                                    placeholder="Trail Name"
                                    value={this.state.form.firstname} />
                            </Col>
                            <Label htmlFor="author" md={2}> Author</Label>
                            <Col md={4}>
                                <Input type="text" id="author" name="trailNauthorame"
                                    placeholder="Author"
                                    value={this.state.form.author} />
                            </Col>
                        </FormGroup>

                        <FormGroup row>
                            <Label htmlFor="county" md={2}> County</Label>
                            <Col md={4}>
                                <Input type="select" id="trailName" name="trailName"
                                    placeholder="Trail Name"
                                    {this.props.counties.map((county) => (
                                        <option value ={county.name}>{county.name}</option>
                                    ))}/>
                            </Col>
                            <Label htmlFor="provence" md={2}> Author</Label>
                            <Col md={4}>
                                <Input type="text" id="author" name="trailNauthorame"
                                    placeholder="Author"
                                    value={this.state.form.firstname} />
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

