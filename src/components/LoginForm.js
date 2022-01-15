import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { Link } from 'react-router-dom';
import Facebook_btn from './Facebook_btn'
import Google_btn from './Google_btn';
function LoginForm() {
    return (
        <>
            <section className="Log_in_form mt-sm-5">
                <div className=" px-sm-5 pt-5">
                    <h1 className=" mb-4" style={{
                        fontWeight:"300"
                        
                    }}>Login</h1>
                    
                    <TextField id="filled-basic" label="Your email" variant="filled" className="w-100" />
                    <TextField id="filled-basic" label="Your password" variant="filled" type="password" className="w-100 my-3 " />
                    <div className="row p-0 text-center">
                        <div className="col-md-4">
                            <p>Forgot password?</p>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-7">
                            <p className="">Don’t have an account? 
                            <Link to="/Register" style={{color: "unset", textDecoration: 'none' }}>  <a href="#" style={{
                        color: "#4032E5"
                    }}> Sign up</a></Link>
                            </p>
                        </div>
                    </div>
                    <Link to="/Home_login" style={{color: "unset", textDecoration: 'none' }}>
                    <Button
                                variant="contained"
                                className="font-weight-light  mb-4"
                                style={{
                                    backgroundColor: "#4737FF",
                                    color: "#fff",
                                    border: "1px solid #red",
                                    width: "100%",
                                    height: "50px",
                                    borderRadius: 0,
                                    letterSpacing: "2px",
                                    width: "100%",                               
                                }}
                            >
                                Continue
                            </Button>
                    </Link>
                       

                                <h4 style={{
                                    color: '#707070',
                                    textAlign: 'center'
                                }}>OR</h4>

<Facebook_btn/>
<Google_btn/>
                    
                    
                    <p>By logging in, you agree to our <a href="#" style={{
                        color: "#4032E5"
                    }}>Terms of Use</a> and <a href="#" style={{
                        color: "#4032E5"
                    }}>Privacy Policy .</a>
                    </p>
                </div>
            </section>
        </>
    )
}

export default LoginForm
