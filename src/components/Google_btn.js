import React, { Component } from 'react'
import GoogleLogin from 'react-google-login';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
const responseGoogle = (response) => {
    console.log(response);
  }
export class Google_btn extends Component {
    


  
    render() {
        return (
          
          <GoogleLogin
      clientId="319078987669-l0trl8hsb6qjmvamdihk0l9kpb01ok6i.apps.googleusercontent.com"
    render={renderProps => (
      <button className="w-100" onClick={renderProps.onClick} disabled={renderProps.disabled}>


<div className="CW_img  w-100 mt-3 mb-4">
                    <Link  style={{color: "unset", textDecoration: 'none' }}>
                    <Button variant="outlined" style={{
                                    width: "100%",
                                    height: "50px",
                                    backgroundColor: "#fff",
                                    color: "#808080",
                                    borderRadius: "0",
                                    position: "relative",
                                    textTransform: "unset",
                                    fontSize: "18px"
                                }}>Continue with google<img style={{
                                    position: "absolute",
                                    left: "13px"
                                }} src="/img/google_logo.png" alt="" /> </Button>
                                </Link>
                    </div>
      </button>
    )}
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
        )
    }
}

export default Google_btn
