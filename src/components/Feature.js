import React from 'react'
import Mini_profile from './Mini_profile'
function Feature() {
    return (
        <div className="feature">
        <div className="container">
            <div class="row">
                <div className="col-md-6">
                    <div className="feature_imgs">
                        <img src="/img/feature_left.png"/>
                    </div>
                </div>
                <div className="col-md-6 align-self-center">
                    <h1>Orci risus faucibus commodo integer dictum.</h1>
                    <br/>
                        <p>As we approached the palace I could see through the great windows of the first floor the brilliantly illuminated audience chamber of Than Kosis. The immense hall was crowded with nobles and their women.</p>      
                        <br/>
                        <Mini_profile/>            
                </div>
            </div>    
        </div>    
    </div>
    )
}

export default Feature;
