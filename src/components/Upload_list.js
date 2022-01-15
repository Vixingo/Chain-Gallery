import React from "react";
import Button from "@material-ui/core/Button";
import Preview_card from "./Preview_card";

function Upload_list() {
    return (
        <>
            <div className="upload_list">
                <div className="all_upload_info">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="fw-light mb-5">List your NFT</h1>
                            <div className="row">
                                <div className="col-sm-4 align-self-center">
                                    <h6>Put on Market</h6>
                                </div>
                                <div className="col-sm-8">
                                    <select
                                        className="px-3"
                                        name=""
                                        id=""
                                        style={{
                                            width: "100%",
                                            backgroundColor: "transparent",
                                            border: "1px solid #DEDEDE",
                                            height: "55px",
                                            color: "#707070",
                                        }}
                                    >
                                        <option value="">Fixed price</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 mt-2">
                                    <h6>Price</h6>
                                </div>
                                <div className="col-sm-6">
                                    <input
                                        type="text"
                                        className="w-100 px-3"
                                        style={{
                                            height: "55px",
                                            border: "1px solid #DEDEDE",
                                        }}
                                        placeholder="0.2"
                                    />
                                </div>
                                <div className="col-sm-2 ps-sm-0">
                                    <select
                                        className="px-3"
                                        name=""
                                        id=""
                                        style={{
                                            width: "100%",
                                            backgroundColor: "transparent",
                                            border: "1px solid #DEDEDE",
                                            height: "55px",
                                        }}
                                    >
                                        <option value="">ETH</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 mt-2"></div>
                                <div className="col-sm-6">
                                    <p
                                        style={{
                                            color: "#707070",
                                        }}
                                    >
                                        Service fee
                                        <h6 className="d-inline-block">
                                            &nbsp;10%
                                        </h6>
                                        <br />
                                        You will receive
                                        <h6 className="d-inline-block">
                                            &nbsp; 0.18 ETH ($418.10)
                                        </h6>
                                    </p>
                                </div>
                                <div className="col-sm-2 ps-sm-0"></div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 ">
                                    <h6 className="mt-3">Royalties</h6>
                                </div>
                                <div className="col-sm-8">
                                    <nav className="navbar navbar-light  p-0 rounded-0 mb-3">
                                        <form className="container-fluid p-0">
                                            <div className="input-group">
                                                <input
                                                    className="px-3 rounded-0"
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="15%"
                                                    style={{
                                                        height: "55px",
                                                        border: "1px solid #DEDEDE",
                                                    }}
                                                />
                                                <span
                                                    className="input-group-text rounded-0"
                                                    id="basic-addon1"
                                                >
                                                    %
                                                </span>
                                            </div>
                                        </form>
                                    </nav>
                                    <p
                                        style={{
                                            color: "#707070",
                                        }}
                                    >
                                        Suggested: 10%, 20%, 30%
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-4 align-self-center">
                                    <h6>Number of copies</h6>
                                </div>
                                <div className="col-sm-8">
                                    <input
                                        type="text"
                                        className="w-100 px-3"
                                        style={{
                                            height: "55px",
                                            border: "1px solid #DEDEDE",
                                        }}
                                        placeholder=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h5 className="mt-3 mb-5">Preview</h5>
                            <Preview_card />
                        </div>
                    </div>
                    <Button
                        variant="contained"
                        className="font-weight-light mt-5 mb-5"
                        style={{
                            backgroundColor: "#4737FF",
                            color: "#fff",
                            border: "1px solid #red",
                            width: "241px",
                            height: "62px",
                            borderRadius: 0,
                            letterSpacing: "2px",
                            boxShadow: " 0 0 1px 5px #A3B9FF",
                            webkitBoxShadow: " 0 0 1px 5px #A3B9FF",
                        }}
                    >
                        List Your NFT
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Upload_list;
