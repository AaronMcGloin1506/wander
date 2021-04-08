import React, { Component } from 'react';

import RenderTrail from './RenderTrailComponent'



function TrailsList({trails}) {
        return(
            <div>
                <h3>Pick a Trail you would like to explore</h3>
                <div className="container">
                    <div className="row justify-content-center">
                        {trails.map((trail) => {
                            return(
                                <RenderTrail trail={trail}/>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        )
    }
export default TrailsList;