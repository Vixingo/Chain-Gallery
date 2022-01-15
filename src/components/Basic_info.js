import {React, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from "@material-ui/core/Button";

function Basic_info() {
    function basic_editor(){
        document.getElementById("basic_info").style.display = "none";
        document.getElementById("basic_info_edit").style.display = "block";
    }
    function basic_editor2(){
        document.getElementById("basic_info_edit").style.display = "none";
        document.getElementById("basic_info").style.display = "block";
    }

    
    return (
        <>
        <div className="basic_info" id="basic_info">
        <div className="d-flex align-items-center flex-wrap ">
        <h1 className="fw-light">Basic Info</h1>
        <Link   /*to="/Gallery"*/ onClick={basic_editor} ><h6 style={{marginLeft:"16px", fontSize: "14px", color:"#4737FF"}}><i class="fas fa-edit"></i> Edit</h6></Link>  
        
        </div>
        <div className="row mt-5">
            <div className="col-sm-3">
                <h6>Name</h6>
            </div>
            <div className="col-sm-9">
                <p>John Doe</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6>Username</h6>
            </div>
            <div className="col-sm-9">
                <p>@johndoe123</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6>Custom URL</h6>
            </div>
            <div className="col-sm-9">
                <p>chain.gallery/johndoe123</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6>Short Bio</h6>
            </div>
            <div className="col-sm-9">
                <p>Lorem mi velit at faucibus magna in integer quis. Vitae urna morbi libero, nibh duis risus. Habitant amet, amet, sem aliquet velit ullamcorper aenean eleifend. Malesuada nec aliquet.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6>Avatar</h6>
            </div>
            <div className="col-sm-9">
                <div className="w-100">
                <img src="/img/pro_pic2.png" className="w-auto rounded-circle" alt="" />
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6>Banner</h6>
            </div>
            <div className="col-sm-9">
            <div className="w-100">
                <img src="/img/cover.png" className="w-100" alt="" />
                </div>
            </div>
        </div>
        </div>

        {/* second one  */}
<div className="basic_info_edit" id="basic_info_edit" style={{display: "none"}}>
        <div className="d-flex align-items-center flex-wrap ">
        <h1 className="fw-light">Basic Info</h1>
        </div>
        <div className="row mt-5">
            <div className="col-sm-3 align-self-center">
                <h6>Name</h6>
            </div>
            <div className="col-sm-9">
                <input type="text" className="w-100 px-3" style={{minHeight: "55px", border: "1px solid #DEDEDE"}} value="John Doe"/>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3 align-self-center">
                <h6>Username</h6>
            </div>
            <div className="col-sm-9">
            <input type="text" className="w-100 px-3" style={{height: "55px", border: "1px solid #DEDEDE"}} value="@johndoe123"/>
                
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3 align-self-center">
                <h6>Custom URL</h6>
            </div>
            <div className="col-sm-9">
            <input type="text" className="w-100 px-3" style={{height: "55px", border: "1px solid #DEDEDE"}} value="chain.gallery/johndoe123"/>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-sm-3 mt-2 ">
                <h6>Short Bio</h6>
            </div>
            <div className="col-sm-9">
            <textarea name="" id="" type="text" className="w-100 p-3" style={{height:"162px", border: "1px solid #DEDEDE", resize: "none"}} value="Lorem mi velit at faucibus magna in integer quis. Vitae urna morbi libero, nibh duis risus. Habitant amet, amet, sem aliquet velit ullamcorper aenean eleifend. Malesuada nec aliquet." >
            </textarea>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-sm-3 mt-2 ">
                <h6>Avatar</h6>
            </div>
            <div className="col-sm-9">
                <div className="w-100">
                <img src="/img/pro_pic2.png" className="w-auto rounded-circle" alt="" />
                </div>
                <div className="d-flex">
                <Link   /*to="/Gallery"*/  ><h6 style={{marginLeft:"16px", fontSize: "16px", color:"#4737FF"}}>Change</h6></Link>  
                <Link   /*to="/Gallery"*/  ><h6 style={{marginLeft:"16px", fontSize: "16px", color:"#4737FF"}}>Delete</h6></Link> 
                </div>
            </div>
        </div>
        <div className="row mt-2">
            <div className="col-sm-3 mt-2">
                <h6>Banner</h6>
            </div>
            <div className="col-sm-9">
            <div className="w-100">
                <img src="/img/cover.png" className="w-100" alt="" />
                </div>
                <div className="d-flex">
                <Link   /*to="/Gallery"*/  ><h6 style={{marginLeft:"16px", fontSize: "16px", color:"#4737FF"}}>Change</h6></Link>  
                <Link   /*to="/Gallery"*/  ><h6 style={{marginLeft:"16px", fontSize: "16px", color:"#4737FF"}}>Delete</h6></Link> 
                </div>
            </div>
        </div>
        <div className="my-4">
        <Button variant="contained"
                className="fw-normal"
                onClick={basic_editor2}
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
                className="fw-normal mx-2"
                onClick={basic_editor2}
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

export default Basic_info
