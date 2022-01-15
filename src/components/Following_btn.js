import React from 'react'
import Button from "@material-ui/core/Button"
function Following_btn() {
    return (
        <>
            <Button
                        variant="contained"
                        className="fw-normal"  data-bs-toggle="modal" data-bs-target="#exampleModal3"
                        style={{
                            backgroundColor: "#fff",
                            color: "#000",
                            border: "1px solid #c4c4c4",
                            width: "150px",
                            height: "38px",
                            borderRadius: 0,
                            boxShadow: "none"
                        }}
                    >
                        Following
                    </Button>
        </>
    )
}

export default Following_btn
