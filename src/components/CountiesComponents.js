import React, { Component } from 'react';

class Counties extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <h1>{this.props.counties.name}</h1>
        );
    }
}

export default Counties;