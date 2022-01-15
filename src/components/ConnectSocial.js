import React from 'react'
import { Link } from 'react-router-dom'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from "@material-ui/core/Button";
function ConnectSocial() {

    function connect_editor(){
        document.getElementById("connect_social").style.display = "none";
        document.getElementById("connect_social_edit").style.display = "block";
    }
    function connect_editor2(){
        document.getElementById("connect_social_edit").style.display = "none";
        document.getElementById("connect_social").style.display = "block";
    }


    return (
        <>
        <div className="connect_social" id="connect_social">
    <div className="d-flex align-items-center flex-wrap mt-5">
        <h1 className="fw-light">Connected Social Accounts</h1>
        <Link /*to="/Gallery"*/ onClick={connect_editor} ><h6 style={{marginLeft:"16px", fontSize: "14px", color:"#4737FF"}}><i class="fas fa-edit"></i> Edit</h6></Link>  
        </div>
        <div className="row mt-5">
            <div className="col-sm-3 align-self-center">
                <h6><i class="fab fa-facebook"></i> Facebook</h6>
            </div>
            <div className="col-sm-9">
            <FormControlLabel
         
                value="start"
                control={<Switch color= "primary" />}
            />
            </div>
        </div>
        
        <div className="row">
            <div className="col-sm-3 align-self-center">
                <h6><i class="fab fa-google"></i> Google</h6>
            </div>
            <div className="col-sm-9">
            <FormControlLabel
          
            
                value="start"
                control={<Switch color="primary" />}
            />
            </div>
        </div>
        </div>


        
        {/* editor */}
        
        <div className="connect_social_edit" id="connect_social_edit"  style={{display: "none"}}>

        
<div className="d-flex align-items-center flex-wrap mt-5">
<h1 className="fw-light">Connected Social Accounts</h1>

</div>
<div className="row mt-5">
<div className="col-sm-3 align-self-center">
    <h6><i class="fab fa-facebook"></i> Facebook</h6>
</div>
<div className="col-sm-9">
<FormControlLabel
    value="start"
    control={<Switch color= "primary" />}
/>
</div>
</div>

<div className="row">
<div className="col-sm-3 align-self-center">
    <h6><i class="fab fa-google"></i> Google</h6>
</div>
<div className="col-sm-9">
<FormControlLabel
    value="start"
    control={<Switch color="primary" />}
/>
</div>
</div>  
<div className="my-4">
<Button variant="contained"
onClick={connect_editor2}
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
onClick={connect_editor2}
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

export default ConnectSocial
