import React from "react";
import Button from "@material-ui/core/Button";
import Preview_card from "./Preview_card";
function Upload_NFT() {
    function next1() {
        document.getElementById("upload_loading").style.display = "block";
        document.getElementById("upload_nft").style.display = "none";
    }
    function next2() {
        document.getElementById("upload_loading").style.display = "none";
        document.getElementById("upload_done").style.display = "block";
    }
    function next3() {
        document.getElementById("upload_done").style.display = "none";
        document.getElementById("upload_ipfs").style.display = "block";
        loading_time();
    }
    function fewSec() {
        document.getElementById("upload_ipfs").style.display = "none";
    }
    function fewSec2() {
        document.getElementById("uploaded").style.display = "block";
    }

    function loading_time() {
        setTimeout(() => {
            fewSec();
        }, 2000);

        setTimeout(() => {
            fewSec2();
        }, 2000);
    }

    return (
        <>
            <div className="upload_nft" id="upload_nft">
                <h1 className="fw-light">Upload an NFT </h1>

                <div
                    className="uploading my-5  p-5 text-center"
                    style={{
                        backgroundColor: "#f4f4f4",
                        maxWidth: "627px",
                        border: "2px dashed #DEDEDE ",
                    }}
                >
                    <div
                        className="upload_img "
                        style={{
                            width: "51px",
                            margin: "0 auto",
                        }}
                    >
                        <img src="/img/Upload.png" alt="" width="51px" />
                    </div>
                    <p className="mb-5">
                        Upload a PNG, JPG or MP4 video. <br /> Maximum file size
                        of 50MB.
                    </p>
                    <div className="d-flex justify-content-center flex-wrap">
                        <p>Drag and drop a file here or &nbsp;</p>
                        <Button
                            variant="contained"
                            className="fw-normal"
                            style={{
                                backgroundColor: "#ffffff",
                                color: "#4032E5",
                                border: "1px solid #4032E5",
                                width: "204px",
                                height: "27px",
                                borderRadius: 0,
                                boxShadow: "none",
                            }}
                        >
                            browse File
                        </Button>
                    </div>
                </div>

                <Button
                    variant="contained"
                    className="fw-normal"
                    onClick={next1}
                    style={{
                        backgroundColor: "#E0E0E0",
                        color: "#fff",
                        border: "5px solid #F4F4F4",
                        width: "241px",
                        height: "62px",
                        borderRadius: 0,
                        boxShadow: "none",
                    }}
                >
                    Next
                </Button>
            </div>

            {/* loading screen */}

            <div
                className="upload_loading"
                id="upload_loading"
                style={{ display: "none" }}
            >
                <div className="all_upload_info">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="fw-light mb-5">Upload your file</h1>

                            <div
                                className="mt-5 "
                                style={{ maxWidth: "440px" }}
                            >
                                <img src="/img/loading.png" />
                            </div>
                            <a href="#">
                                <h6
                                    style={{
                                        color: "#4737FF",
                                    }}
                                >
                                    Change
                                </h6>
                            </a>
                        </div>
                        <div className="col-lg-4">
                            <h5 className="mt-3 mb-5">Preview</h5>
                            <Preview_card />
                        </div>
                    </div>
                    <Button
                        variant="contained"
                        className="fw-normal mt-5"
                        onClick={next2}
                        style={{
                            backgroundColor: "#E0E0E0",
                            color: "#fff",
                            border: "5px solid #F4F4F4",
                            width: "241px",
                            height: "62px",
                            borderRadius: 0,
                            boxShadow: "none",
                        }}
                    >
                        Next
                    </Button>
                </div>
            </div>

            {/* upload Done */}
            <div
                className="upload_done"
                id="upload_done"
                style={{ display: "none" }}
            >
                <div className="all_upload_info">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="fw-light mb-5">Upload your file</h1>

                            <div
                                className="mt-5 "
                                style={{ maxWidth: "440px" }}
                            >
                                <img src="/img/stars.png" />
                            </div>
                            <a href="#">
                                <h6
                                    style={{
                                        color: "#4737FF",
                                    }}
                                >
                                    Change
                                </h6>
                            </a>
                        </div>
                        <div className="col-lg-4">
                            <h5 className="mt-3 mb-5">Preview</h5>
                            <Preview_card />
                        </div>
                    </div>
                    <Button
                        variant="contained"
                        className="fw-light mt-5"
                        onClick={next3}
                        style={{
                            letterSpacing: "3px",
                            backgroundColor: "rgb(71, 55, 255)",
                            color: "#fff",
                            width: "241px",
                            height: "62px",
                            borderRadius: 0,
                            boxShadow: "rgb(163, 185, 255) 0px 0px 1px 5px",
                        }}
                    >
                        Upload
                    </Button>
                </div>
            </div>
            {/* uploading file to IPFS */}
            <div
                className="upload_ipfs"
                id="upload_ipfs"
                style={{ display: "none" }}
            >
                <div className="all_upload_info">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="fw-light mb-5">
                                Uploading file to IPFS
                            </h1>

                            <div className="mt-5 ">
                                <p>
                                    The InterPlanetary File System, known as
                                    IPFS, is a peer-to-peer network for sharing
                                    data in a distributed file system.
                                </p>

                                <img
                                    src="/img/loadline.png"
                                    alt=""
                                    style={{ maxWidth: "64px" }}
                                    className="my-4 spining_load"
                                />
                            </div>

                            <span style={{ color: "rgba(0, 0, 0, .5)" }}>
                                <i class="fas fa-info"></i> Learn more about
                                IPFS
                            </span>
                        </div>
                        <div className="col-lg-4">
                            <h5 className="mt-3 mb-5">Preview</h5>
                            <Preview_card />
                        </div>
                    </div>
                    <Button
                        variant="contained"
                        className="fw-light mt-5"
                        style={{
                            letterSpacing: "3px",
                            backgroundColor: "#ffffff",
                            color: "#4737FF",
                            width: "251px",
                            height: "46px",
                            borderRadius: 0,
                            border: "1px solid #4737FF",
                            boxShadow: "none",
                        }}
                    >
                        Cancel Upload
                    </Button>
                </div>
            </div>

            {/* your file is uploaded  */}
            <div
                className="uploaded "
                id="uploaded"
                style={{ display: "none" }}
            >
                <div className="all_upload_info">
                    <div className="row">
                        <div className="col-lg-8">
                            <h1 className="fw-light mb-5">
                                Your file is uploaded!
                            </h1>

                            <div className="mt-5 ">
                                <p>
                                    Your file has been uploaded in IPFS and is
                                    ready for minting.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h5 className="mt-3 mb-5">Preview</h5>
                            <Preview_card />
                        </div>
                    </div>
                    <a href="">
                        <Button
                            variant="contained"
                            className="fw-light mt-5"
                            style={{
                                letterSpacing: "3px",
                                backgroundColor: "rgb(71, 55, 255)",
                                color: "#fff",
                                width: "241px",
                                height: "62px",
                                borderRadius: 0,
                                boxShadow: "rgb(163, 185, 255) 0px 0px 1px 5px",
                            }}
                        >
                            Mint your File
                        </Button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Upload_NFT;
