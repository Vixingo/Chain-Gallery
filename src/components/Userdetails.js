import React from 'react'
import Button from '@material-ui/core/Button';
import Followers from './Followers'
import Cancel_btn from './Cancel_btn'
import Unfollow_btn from './Unfollow_btn'
import Following from './Following'
function Userdetails() {
    return (
        <>

            
            <section className="user_details">
                <div className='container'>
                
                
                <div className="row">
                    <div className="col-md-6">
                        <h1>User Name </h1>

                        <h6>@username</h6>

                        <div className="bio">
                            <p>User bio cras quam blandit scelerisque lorem gravida eget faucibus nisl. Volutpat ac turpis consectetur gravida malesuada lorem.</p>

                        <div className="icons mb-5"> 
                            <i class="fas fa-globe me-3"></i>
                            <i class="fab fa-instagram me-3"></i>
                            <i class="fab fa-twitter me-3"></i>
                            <i class="fab fa-facebook me-3"></i>
                            <i class="fab fa-youtube me-3"></i></div>
                        </div>
                    </div>
                    <div className="col-md-6 text-end merawala">
                    <div className="w-100 mb-5">
                    <Button variant="contained" className="font-weight-light me-2 px-4" style={{
                    backgroundColor: "#FFF",
                    color:"#4032E5",
                    border: "1px solid #4032E5",
                    borderRadius : "0",
                    letterSpacing: "2px",

                    
                    }}>
                    SHARE
                    </Button>
                    <Button variant="contained" className="font-weight-light px-4" style={{
                    backgroundColor: "#4032E5",
                    color:"#ffffff",
                    borderRadius : "0",
                    letterSpacing: "2px",
                    border: "1px solid #4032E5"
                    }}>
                    EDIT PROFILE
                    </Button>
                    </div>
                    <div className="follow w-100 mb-4">
                    <ul >
                        <li data-bs-toggle="modal" data-bs-target="#exampleModal2" style={{cursor : "pointer"}}> <b>10</b> followers</li>
                        <li  data-bs-toggle="modal" data-bs-target="#exampleModal4" style={{cursor : "pointer"}}> <b>32</b> following</li>
                        <li> <b>9</b> views</li>
                    </ul>


{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
    <div className="modal-content">
        <div className="modal-header border-0">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body ">
        <h3 className="text-center fw-light mb-3 position-sticky" >Followers</h3>
            <Followers/>
            <Followers/>
            <Following/>
            <Followers/>
            <Followers/>
            <Following/>
            <Followers/>
            <Followers/>
            <Followers/>
            <Followers/>
            <Following/>
            <Followers/>
            <Followers/>
            <Followers/>
            <Followers/>
            <Followers/>
            <Followers/>
            <Followers/>
        </div>
    </div>
    </div>
</div>


<div className="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
    <div className="modal-content">
        <div className="modal-header border-0">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body ">
        <h3 className="text-center fw-light mb-3 position-sticky" >Following</h3>
        <Following/>
        <Following/>
        <Following/>
        <Following/>
        <Following/>
        <Following/>
        <Following/>
        <Following/>
        <Following/>

        </div>
    </div>
    </div>
</div>


<div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
    <div className="modal-content">
        <div className="modal-header border-0">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body ">
        <div className="text-center mb-4">
        <img className="rounded" src="/img/Artist.png" alt="" />
        </div>
        <h3 className="text-center fw-light mb-4 position-sticky">Unfollow @artistname?</h3>
        <div className="d-flex justify-content-evenly pb-4 mt-3 ">
        <Cancel_btn/>
        <Unfollow_btn/>
        </div>
        </div>
    </div>
    </div>
</div>







                    </div>
                    <p className="">Joined: April 2021</p>

                    </div>
                </div>
                    
                
                

                </div>
            </section>
        </>
    )
}

export default Userdetails

