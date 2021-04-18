import React from 'react';

import RenderTrail from './RenderTrailComponent'
import { Loading } from './LoadingComponent'



function TrailsList({trails, isLoading, errMess}) {
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
    else if(trails.length === 0)    
        {return(
                <div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <h3>No trails for this county sorry</h3>
                        </div>
                    </div>
                </div>
            )}

    
    else   
    {return(
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
        )}
    }
export default TrailsList;