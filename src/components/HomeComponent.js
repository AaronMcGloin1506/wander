import React from 'react';
import { Button } from 'reactstrap'

function Home(props) {
    return(
      <div className="container">
        <div className="row row-header justify-content-center">
          <div className="col-12 col-md-7">
           <img src='assets/images/logo.png' height="100%" width="100%" alt="Wander" />
          </div>
          <div className="col-12 col-md-6">
            <h3>Welcome to Wander.</h3>
            <h4>The exciting new website where you can view and peoples latest adventures and share with the world your new explorations</h4>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            <Button className="text-dark" type="submit" size="lg" color="info" href="/upload">Upload Trail</Button>
          </div>
          <div className="col-4">
            <Button className="text-dark" type="submit" size="lg" color="info" href="/provence">View Trail</Button>
          </div>
        </div>
      </div>
    );
}

export default Home; 