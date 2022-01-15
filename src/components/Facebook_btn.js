import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
export class Facebook_btn extends Component {
    responseFacebook=(response)=>{
        console.log(response);
    }
    render() {
        return (

            <FacebookLogin
            appId="536569094052244"
            autoLoad
            callback={this.responseFacebook}
            render={renderProps => (
              <button className="w-100" onClick={renderProps.onClick}>
                  <div className="CW_img w-100 mt-4">
                
                <Link  style={{color: "unset", textDecoration: 'none' }}>
                
                            <Button variant="outlined" style={{
                                width: "100%",
                                height: "50px",
                                backgroundColor: "#1C77F2",
                                color: "#fff",
                                borderRadius: "0",
                                position: "relative",
                                border: "none",
                                textTransform: "unset", fontSize: "18px"
                            }}>&nbsp; Continue with Facebook <img style={{
                                position: "absolute",
                                left: "13px"
                            }} src="/img/facebook_logo.png" alt="" /></Button>
                
                </Link>
                </div>
              </button>
            )}
          />
        )
    }
}

export default Facebook_btn
