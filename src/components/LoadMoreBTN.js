import React from 'react'
import Button from "@material-ui/core/Button";

function LoadMoreBTN() {
    return (
        <>
            <div className="load_more mt-5 mb-3">
                    <Button
                        variant="contained"
                        className="font-weight-light"
                        style={{
                            backgroundColor: "#ffffff",
                            color: "#4032E5",
                            border: "1px solid #4032E5",
                            padding: "4px 60px",
                            borderRadius: 0,
                        }}
                    >
                        LOAD MORE
                    </Button>
                </div>
        </>
    )
}

export default LoadMoreBTN
