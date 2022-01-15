import React from 'react'
import { Link } from 'react-router-dom'
import Button from "@material-ui/core/Button";

function Social_link() {
    function social_editor(){
        document.getElementById("social_link").style.display = "none";
        document.getElementById("social_link_edit").style.display = "block";
    }
    function social_editor2(){
        document.getElementById("social_link_edit").style.display = "none";
        document.getElementById("social_link").style.display = "block";
    }


    return (
        <>
        <div className= "social_link" id="social_link">

       

        <div className=" d-flex align-items-center flex-wrap pt-5">
        <h1 className="fw-light">Social Link</h1>
        <Link /*to="/Gallery"*/ onClick={social_editor} ><h6 style={{marginLeft:"16px", fontSize: "14px", color:"#4737FF"}}><i class="fas fa-edit"></i> Edit</h6></Link>  
        </div>
        <div className="row mt-5">
            <div className="col-sm-3">
                <h6 className="fw-normal"><i class="fas fa-globe"></i>&nbsp; Website</h6>
            </div>
            <div className="col-sm-9">
                <p className="text-muted">Website URL</p>
            </div>
        </div>
        
        <div className="row">
            <div className="col-sm-3">
                <h6 className="fw-normal"><i class="fab fa-instagram"></i> Instagram</h6>
            </div>
            <div className="col-sm-9">
                <p>johndoe123</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6 className="fw-normal"><i class="fab fa-twitter"></i>&nbsp; Twitter</h6>
            </div>
            <div className="col-sm-9">
                <p>johndoetweets</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6 className="fw-normal"><i class="fab fa-youtube"></i>&nbsp; Youtube</h6>
            </div>
            <div className="col-sm-9">
                <p className="text-muted">Channel URL</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6 className="fw-normal"><i class="fab fa-discord"></i>&nbsp; Discord</h6>
            </div>
            <div className="col-sm-9">
                <p className="text-muted">Include #Code</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6 className="fw-normal"><i class="fab fa-twitch"></i>&nbsp; Twitch</h6>
            </div>
            <div className="col-sm-9">
                <p className="text-muted">Twitch Username</p>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3">
                <h6 className="fw-normal"><i class="fab fa-tiktok"></i>&nbsp; Tiktok</h6>
            </div>
            <div className="col-sm-9">
                <p className="text-muted">Tiktok Username</p>
            </div>
        </div>
        </div>

        {/* editor */}


        <div className="social_link_edit" id="social_link_edit" style={{display: "none"}}>
    <div className="  d-flex align-items-center flex-wrap pt-5">
        <h1 className="fw-light">Social Link</h1>
        </div>
        <div className="row mt-5">
            <div className="col-sm-3 align-self-center">
                <h6 className="fw-normal"><i class="fas fa-globe"></i>&nbsp; Website</h6>
            </div>
            <div className="col-sm-9">
            <input type="text" className="w-100 my-2 px-3" style={{minHeight: "55px", border: "1px solid #DEDEDE"}} placeholder="Website URL"/>
            </div>
        </div>
        
        <div className="row">
            <div className="col-sm-3 align-self-center">
                <h6 className="fw-normal"><i class="fab fa-instagram"></i> Instagram</h6>
            </div>
            <div className="col-sm-9">
            <input type="text" className="w-100 my-2 px-3" style={{minHeight: "55px", border: "1px solid #DEDEDE"}} value="johndoe123"/>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3 align-self-center">
                <h6 className="fw-normal"><i class="fab fa-twitter"></i>&nbsp; Twitter</h6>
            </div>
            <div className="col-sm-9">
            <input type="text" className="w-100 my-2 px-3" style={{minHeight: "55px", border: "1px solid #DEDEDE"}} value="johndoetweets"/>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3 align-self-center">
                <h6 className="fw-normal"><i class="fab fa-youtube"></i>&nbsp; Youtube</h6>
            </div>
            <div className="col-sm-9">
            <input type="text" className="w-100 my-2 px-3" style={{minHeight: "55px", border: "1px solid #DEDEDE"}} placeholder="Channel URL"/>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3 align-self-center">
                <h6 className="fw-normal"><i class="fab fa-discord"></i>&nbsp; Discord</h6>
            </div>
            <div className="col-sm-9">
            <input type="text" className="w-100 my-2 px-3" style={{minHeight: "55px", border: "1px solid #DEDEDE"}} placeholder="Include #Code"/>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3 align-self-center">
                <h6 className="fw-normal"><i class="fab fa-twitch"></i>&nbsp; Twitch</h6>
            </div>
            <div className="col-sm-9">
            <input type="text" className="w-100 my-2 px-3" style={{minHeight: "55px", border: "1px solid #DEDEDE"}} placeholder=" Twitch Username"/>
            
            </div>
        </div>
        <div className="row">
            <div className="col-sm-3 align-self-center">
                <h6 className="fw-normal"><i class="fab fa-tiktok"></i>&nbsp; Tiktok</h6>
            </div>
            <div className="col-sm-9">
            <input type="text" className="w-100 my-2 px-3" style={{minHeight: "55px", border: "1px solid #DEDEDE"}} placeholder=" Tiktok Username"/>         
            </div>
        </div>
        <div className="my-4">
        <Button variant="contained"
          onClick={social_editor2}
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
                onClick={social_editor2}
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

export default Social_link
