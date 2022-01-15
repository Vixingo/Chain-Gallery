import React from "react";
import Button from "@material-ui/core/Button";
import Artdetailtab from "./Artdetailtab";
import MakeOfferModal_1 from "./MakeOfferModal_1";
import MakeOfferModal_2 from "./MakeOfferModal_2";
import MakeOfferModal_3 from "./MakeOfferModal_3";
import MakeOfferModal_4 from "./MakeOfferModal_4";
function Artdetail() {
    return (
        <>
            <section className="art_detail">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1>Here goes the artwork name</h1>
                            <div className="art_profile">
                                <div className="art_pro_img">
                                    <img src="/img/profile_demo.png" alt="" />
                                </div>
                                <div className="art_pro_name">
                                    <h5>@artistname</h5>
                                </div>
                            </div>

                            <div className="row ">
                                <div className="col-sm-4">
                                    <p>Reserve Price</p>
                                    <h2>2.00 ETH</h2>
                                    <p>$3,428.04</p>
                                </div>
                                <div className="col-sm-8">
                                    <p className="mb-4">
                                        Augue aenean turpis diam in nulla ac
                                        dignissim morbi. Consequat tortor
                                        aliquam sodales tellus.
                                    </p>
                                    <a href="#">
                                        Learn more about making an offer
                                    </a>
                                </div>
                            </div>
                            <Button
                                variant="contained"
                                className="font-weight-light mt-4 mb-5"
                                style={{
                                    textAlign: "center",
                                    backgroundColor: "#4737FF",
                                    color: "#fff",
                                    border: "1px solid #red",
                                    padding: "6px 60px",
                                    borderRadius: 0,
                                    letterSpacing: "2px",
                                    width: "100%",
                                    boxShadow: " 0 0 1px 5px #A3B9FF",
                                    webkitBoxShadow: " 0 0 1px 5px #A3B9FF",
                                }}
                                data-bs-toggle="modal" href="#exampleModalToggle" 
                            >
                                SIGN UP TO MAKE AN OFFER
                            </Button>


{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable " >
    <div className="modal-content"  style={{
               backgroundImage : "url(/img/modalBG.png)",
               backgroundSize : "50% 100%",
               backgroundRepeat :"no-repeat"
            }}>
      <div className="modal-header border-0">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body" >
      <MakeOfferModal_1/>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content"  style={{
               backgroundImage : "url(/img/modalBG.png)",
               backgroundSize : "50% 100%",
               backgroundRepeat :"no-repeat"
            }}>
      <div className="modal-header border-0">
       
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <MakeOfferModal_2/>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabindex="-1">
  <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content"  style={{
               backgroundImage : "url(/img/modalBG.png)",
               backgroundSize : "50% 100%",
               backgroundRepeat :"no-repeat"
            }}>
      <div className="modal-header border-0">
       
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <MakeOfferModal_3/>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModalToggle4" aria-hidden="true" aria-labelledby="exampleModalToggleLabel4" tabindex="-1">
  <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
    <div className="modal-content"  style={{
               backgroundImage : "url(/img/modalBG.png)",
               backgroundSize : "50% 100%",
               backgroundRepeat :"no-repeat"
            }}>
      <div className="modal-header border-0">
       
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <MakeOfferModal_4/>
      </div>
    </div>
  </div>
</div>






                            <ul
                                className="d-flex"
                                style={{ 
                                    cursor: "pointer",
                                    listStyle: "none",
                                    padding: 0,
                                }}
                            >
                                <li className="mr-3">
                                    <i class="fas fa-heart"></i> 17
                                </li>
                                <li className="mr-3">
                                    <i class="fas fa-comment"></i> 53
                                </li>
                                <li className="mr-3">
                                    <i class="fas fa-eye"></i>138
                                </li>
                                <li className="mr-3" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                                    <i class="fas fa-share-alt" ></i> Share
                                </li>
                            </ul>




                            {/* <!-- Share modal --> */}


                                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header border-0">
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <h3 className="modal-title" id="exampleModalLabel"
                                                        style={{
                                                            fontWeight: "300",
                                                            textAlign: "center"
                                                        }}
                                                    >Share this artwork</h3>
                                                <div className="modal-body mb-4 mx-4">
                                                        <div className="d-flex justify-content-around fs-1 py-3"> 
                                                            <i class="fas fa-link"></i>
                                                            <i class="fab fa-facebook"></i>
                                                            <i class="fab fa-twitter"></i>
                                                            <i class="fab fa-pinterest"></i>                              
                                                        </div>
                                                        <div className="d-flex justify-content-evenly fs-1 py-3"> 
                                                            <i class="fas fa-envelope"></i>
                                                            <i class="fab fa-facebook-messenger"></i>
                                                            <i class="fab fa-whatsapp"></i>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                        


                        <div className="col-md-6">
                            <Artdetailtab />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Artdetail;
