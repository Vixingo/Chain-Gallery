import React from "react";

function Artcomment() {
    return (
        <>
            <div className="comment ">
                <h1 className="mb-4 mt-4">Comments</h1>

                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="3"
                    placeholder="What are your thoughts on this artwork?"
                    style={{
                        width: "90%",
                        resize: "none",
                        border: "1px solid #c4c4c4",
                        padding: "15px 10px",
                    }}
                ></textarea>
            </div>
        </>
    );
}

export default Artcomment;
