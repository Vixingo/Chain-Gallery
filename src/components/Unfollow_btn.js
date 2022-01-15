import React from 'react'
import Button from "@material-ui/core/Button";
function Unfollow_btn() {
    return (
        <>
             <Button
                        variant="contained"
                        className="fw-normal" data-bs-dismiss="modal"
                        style={{
                            backgroundColor: "#4032E5" ,
                            color:"#ffffff" ,
                            border: "1px solid #4032E5",
                            width: "150px",
                            height: "38px",
                            borderRadius: 0,
                            boxShadow: "none"
                        }}
                    >
                        Unfollow
                    </Button>  
        </>
    )
}

export default Unfollow_btn
