import React, { Component } from 'react';
import { Navbar } from 'reactstrap';
class Header extends Component {
    constructor(props){
        super(props);

        this.state = {
            isNavOpen: false
         };

         this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <div className="color">
                <Navbar>
                    <div className="container">
                        <a href="/home"><img src='assets/images/logo.png' height="50" width="170" alt="Wander" /></a>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;