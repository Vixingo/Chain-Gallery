import React from 'react'
import Button from '@material-ui/core/Button';
import styled from 'styled-components'
function ArtistCards() {
    return (
        <section className="artist_cards">
            <div className="card-group">
                <div className="card m-3 border-0"
                    style={{
                        webkitBoxShadow: '0 0 4px 1px #c4c4c4',
                        boxShadow:' 0 0 4px 1px #c4c4c4',
                        borderRadius: '5px'
                    }}
                    >
                        <img src="/img/nothing_4.png" className="card-img-top" alt="" height="93px" style={{
                            borderTopLeftRadius:'5px',
                            borderTopRightRadius:'5px'
                        }}/>
                            <img src="/img/Artist.png" alt="..." style={{
                            width: '66px',
                            border: '3px solid #fff',
                            marginTop: '-35px',
                            marginBottom:'-10px',
                            marginLeft: '15px',
                            borderRadius: '50%'
                                    }}/>
                        <div className="card-body">
                        <h4 className="card-title fw-light">John Dominic Doe</h4>
                        <h6>@username</h6>
                        <p className="card-text h-100" style={{
                            fontSize:'12px',
                            fontWeight:'300'
                        }}>User bio cras quam blandit scelerisque lorem gravida eget faucibus nisl. Volutpat ac turpis consectetur gravida malesuada lorem ipsum dolor sit amet.</p>
                        </div>
                    <div className="card-footer h-auto">
                                <div className="d-flex justify-content-between">
                                    <div className=""> <h6 className="m-0">526</h6>
                                <H8>artworks</H8></div>
                                    <div className=""> <h6 className="m-0">12K</h6>
                                <H8>follower</H8></div>
                                <div className=""><Button variant="outlined" style={{
                                    color: '#4032E5',
                                    borderColor: '#4032E5',
                                    letterSpacing: '2px',
                                    borderRadius: '0'
                                }}>
                                Follow</Button></div>
                                </div>

                    </div>
                </div>
                <div className="card m-3 border-0" style={{
                        webkitBoxShadow: '0 0 4px 1px #c4c4c4',
                        boxShadow:' 0 0 4px 1px #c4c4c4',
                        borderRadius: '5px'
                    }}>
                        <img src="/img/nothing_4.png" className="card-img-top" alt="" height="93px" style={{
                            borderTopLeftRadius:'5px',
                            borderTopRightRadius:'5px'
                        }}/>
                            <img src="/img/Artist.png" alt="..." style={{
                            width: '66px',
                            border: '3px solid #fff',
                            marginTop: '-35px',
                            marginBottom:'-10px',
                            marginLeft: '15px',
                            borderRadius: '50%'
                                    }}/>
                        <div className="card-body">
                        <h4 className="card-title fw-light">James Andrews</h4>
                        <h6>@username</h6>
                        <p className="card-text h-100" style={{
                            fontSize:'12px',
                            fontWeight:'300'
                        }}></p>
                        </div>
                        <div className="card-footer h-auto">
                                <div className="d-flex justify-content-between">
                                    <div className=""> <h6 className="m-0">18</h6>
                                <H8>artworks</H8></div>
                                    <div className=""> <h6 className="m-0">1.7K</h6>
                                <H8>follower</H8></div>
                                <div className=""><Button variant="outlined" style={{
                                    color: '#4032E5',
                                    borderColor: '#4032E5',
                                    letterSpacing: '2px',
                                    borderRadius: '0'
                                }}>
                                Follow</Button></div>
                                </div>

                    </div>
                </div>
                <div className="card m-3 border-0" style={{
                        webkitBoxShadow: '0 0 4px 1px #c4c4c4',
                        boxShadow:' 0 0 4px 1px #c4c4c4',
                        borderRadius: '5px'
                    }}>
                        <img src="/img/nothing_4.png" className="card-img-top" alt="" height="93px" style={{
                            borderTopLeftRadius:'5px',
                            borderTopRightRadius:'5px'
                        }}/>
                            <img src="/img/Artist.png" alt="..." style={{
                            width: '66px',
                            border: '3px solid #fff',
                            marginTop: '-35px',
                            marginBottom:'-10px',
                            marginLeft: '15px',
                            borderRadius: '50%'
                                    }}/>
                        <div className="card-body">
                        <h4 className="card-title fw-light">Emmy Jackson</h4>
                        <h6>@username</h6>
                        <p className="card-text h-100" style={{
                            fontSize:'12px',
                            fontWeight:'300'
                        }}>User bio cras quam blandit scelerisque lorem gravida eget faucibus nisl. </p>
                        </div>
                        <div className="card-footer h-auto">
                                <div className="d-flex justify-content-between">
                                    <div className=""> <h6 className="m-0">27</h6>
                                <H8>artworks</H8></div>
                                    <div className=""> <h6 className="m-0">710  </h6>
                                <H8>follower</H8></div>
                                <div className=""><Button variant="outlined" style={{
                                    color: '#4032E5',
                                    borderColor: '#4032E5',
                                    letterSpacing: '2px',
                                    borderRadius: '0'
                                }}>
                                Follow</Button></div>
                                </div>

                    </div>
                </div>
                <div className="card m-3 border-0" style={{
                        webkitBoxShadow: '0 0 4px 1px #c4c4c4',
                        boxShadow:' 0 0 4px 1px #c4c4c4',
                        borderRadius: '5px'
                    }}>
                        <img src="/img/nothing_4.png" className="card-img-top" alt="" height="93px" style={{
                            borderTopLeftRadius:'5px',
                            borderTopRightRadius:'5px'
                        }}/>
                            <img src="/img/Artist.png" alt="..." style={{
                            width: '66px',
                            border: '3px solid #fff',
                            marginTop: '-35px',
                            marginBottom:'-10px',
                            marginLeft: '15px',
                            borderRadius: '50%'
                                    }}/>
                        <div className="card-body">
                        <h4 className="card-title fw-light">ARTMCHNE</h4>
                        <h6>@username</h6>
                        <p className="card-text h-100" style={{
                            fontSize:'12px',
                            fontWeight:'300'
                        }}>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="card-footer h-auto">
                                <div className="d-flex justify-content-between">
                                    <div className=""> <h6 className="m-0">31</h6>
                                <H8>artworks</H8></div>
                                    <div className=""> <h6 className="m-0">483</h6>
                                <H8>follower</H8></div>
                                <div className=""><Button variant="outlined" style={{
                                    color: '#4032E5',
                                    borderColor: '#4032E5',
                                    letterSpacing: '2px',
                                    borderRadius: '0'
                                }}>
                                Follow</Button></div>
                                </div>

                    </div>
                </div>
             </div>
        </section>
    )
}

export default ArtistCards


const H8 = styled.p`
    font-size: 12px;
    margin: 0;
    font-weight: 300;
`