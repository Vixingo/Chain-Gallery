import React from 'react'
import { Link } from 'react-router-dom'
import Button from "@material-ui/core/Button";

function EmailPassword() {

    function email_editor(){
        document.getElementById("email_password").style.display = "none";
        document.getElementById("email_password_edit").style.display = "block";
    }
    function email_editor2(){
        document.getElementById("email_password_edit").style.display = "none";
        document.getElementById("email_password").style.display = "block";
    }

    return (
        <>
        <div className="email_password" id="email_password">
            <div className="d-flex align-items-center flex-wrap ">
        <h1 className="fw-light">Email and password</h1>
        <Link /*to="/Gallery"*/ onClick={email_editor} ><h6 style={{marginLeft:"16px", fontSize: "14px", color:"#4737FF"}}><i class="fas fa-edit"></i> Edit</h6></Link>  
        </div>
        <div className="row mt-5">
            <div className="col-sm-3">
                <h6>Email</h6>
            </div>
            <div className="col-sm-9">
                <p>johndoe@gmail.com</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6>Old password</h6>
            </div>
            <div className="col-sm-9">
                <p className="text-muted">Enter old password</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6>New password</h6>
            </div>
            <div className="col-sm-9">
                <p className="text-muted">Enter new password</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6>Confirm password</h6>
            </div>
            <div className="col-sm-9">
                <p className="text-muted">Retype password</p>
            </div>
        </div>
        </div>
        {/* Editor */}
        <div className="email_password_edit" id="email_password_edit" style={{display: "none"}}>
        <div className="d-flex align-items-center flex-wrap ">
        <h1 className="fw-light">Email and password</h1>
      
        </div>
        <div className="row mt-5">
            <div className="col-sm-3 align-self-center">
                <h6>Email</h6>
            </div>
            <div className="col-sm-9">
            <input type="text" className="w-100 my-1 px-3" style={{minHeight: "55px", border: "1px solid #DEDEDE"}} value=" johndoe@gmail.com"/>
              
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3 align-self-center">
                <h6>Old password</h6>
            </div>
            <div className="col-sm-9">
            <input type="text" className="w-100 my-1 px-3" style={{minHeight: "55px", border: "1px solid #DEDEDE"}} placeholder=" Enter old password"/>
            
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3 align-self-center">
                <h6>New password</h6>
            </div>
            <div className="col-sm-9">
            <input type="text" className="w-100 my-1 px-3" style={{minHeight: "55px", border: "1px solid #DEDEDE"}} placeholder="Enter new password"/>
            
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3 align-self-center">
                <h6>Confirm password</h6>
            </div>
            <div className="col-sm-9">
            <input type="text" className="w-100 my-1 px-3" style={{minHeight: "55px", border: "1px solid #DEDEDE"}} placeholder="Retype password"/>
            </div>
        </div>
        <div className="my-4">
        <Button variant="contained"
         onClick={email_editor2}
                className="fw-normal"
                        style={{
                            backgroundColor: "#4032E5",
                            color: "#fff",
                            border: "1px solid #4032E5",
                            padding: "6px 44px",
                            borderRadius: 0,
                            boxShadow : "none",
                        }}
                    >
                       Save Changes
                    </Button>
        <Button variant="contained"
         onClick={email_editor2}
                className="fw-normal mx-2"
                        style={{
                            backgroundColor: "#ffffff",
                            color: "#4032E5",
                            border: "1px solid #4032E5",
                            padding: "6px 30px",
                            borderRadius: 0,
                            boxShadow : "none",

                        }}
                    >
                        Cancel
                    </Button>
        </div>
        </div>
        </>
    )
}

export default EmailPassword
