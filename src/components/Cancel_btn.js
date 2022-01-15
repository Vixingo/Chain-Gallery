import React from 'react'
import Button from "@material-ui/core/Button";
function Cancel_btn() {
    return (
        <>
             <Button
                        variant="contained"
                        className="fw-normal" data-bs-dismiss="modal"
                        style={{
                            backgroundColor: "#ffffff",
                            color: "#4032E5",
                            border: "1px solid #4032E5",
                            width: "150px",
                            height: "38px",
                            borderRadius: 0,
                            boxShadow: "none"
                        }}
                    >
                        Cancel
                    </Button>  
        </>
    )
}

export default Cancel_btn
