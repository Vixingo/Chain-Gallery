import React from 'react'
import Button from "@material-ui/core/Button";
function Followers_btn() {
    return (
        <>
            <Button
                        variant="contained"
                        className="fw-normal"  data-bs-toggle="modal" data-bs-target="#exampleModal3"
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
                        Follow Back
                    </Button>
        </>
    )
}

export default Followers_btn
