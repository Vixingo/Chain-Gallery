import React from "react";
import Button from "@material-ui/core/Button";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

function Setting_Wallet() {
    return (
        <>
            <h1
                className=" mb-4"
                style={{
                    fontWeight: "300",
                }}
            >
                Wallet balance
            </h1>

            <h1
                className=" mb-4"
                style={{
                    fontWeight: "300",
                    color: "#4032E5",
                }}
            >
                0.00 ETH
            </h1>

            <h5 className="mb-3">You have not connected any wallet.</h5>

            <div className="row">
                <h2 className="fw-light mt-5">Connect a wallet</h2>
                <div className="col-sm-7">
                    <div className="wallet_img w-100 mt-3">
                        <a /* href="#" */>
                            {" "}
                            <img
                                src="/img/Metamask.png"
                                alt=""
                                className="w-100"
                            />
                        </a>
                    </div>
                    <div className="wallet_img  w-100 mt-3 mb-1">
                        <a /* href="#" */>
                            <img
                                src="/img/Fortmatic.png"
                                alt=""
                                className="w-100 "
                            />
                        </a>
                    </div>
                    {/* <div className="connected_views">
                        <input
                            type="text"
                            value="0x01aBc23D45E67F0g8H9I01jkL234567m8901234N"
                            className="w-100 text-center"
                            style={{
                                height: "62px",
                                backgroundColor: "#F4F4F4",
                                border: "none",
                            }}
                        />

                        <div className="d-flex justify-content-between ">
                            <Button
                                variant="outlined"
                                color="primary"
                                className="my-3 rounded-0"
                                style={{
                                    width: "221px",
                                    height: "46px",
                                }}
                            >
                                <FileCopyOutlinedIcon />
                                Copy Address
                            </Button>
                            &nbsp;
                            <Button
                                variant="outlined"
                                color="primary"
                                className="my-3 rounded-0"
                                style={{
                                    width: "221px",
                                    height: "46px",
                                }}
                            >
                                Show QR Code
                            </Button>
                        </div>
                    </div> */}
                </div>
                <div className="col-sm-5"></div>
            </div>
            <p className=" mb-4">
                New to Ethereum?{" "}
                <a
                    href="#"
                    style={{
                        color: "#4032E5",
                    }}
                >
                    {" "}
                    Learn more about wallets
                </a>
            </p>
        </>
    );
}

export default Setting_Wallet;
