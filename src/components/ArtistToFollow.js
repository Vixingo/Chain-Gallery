import { List } from '@material-ui/core'
import React from 'react'
import ArtistCards from './ArtistCards'

function ArtistToFollow() {
    return (
        <section className="artist_to_follow my-5 py-5 " style={{
            backgroundColor: '#FAFAFA'
        }}> 
        <div className="container">
            <ul style={{
                display: 'flex',
                flexWrap:'wrap',
                alignItems: 'center',
                listStyle: 'none',
                padding: '0'
                }}>
                <li className="me-5">
                <h1 style={{
                    fontWeight: '300'
                }}>Artists to follow</h1>
                </li>
                <li className="me-5"><h6 style={{
                    margin: '0',
                    fontSize:'12px',
                    fontWeight: '300',
                    color: '#707070',
                    letterSpacing : '2px',
                    textTransform: 'uppercase'
            }}>Trending</h6></li>
            <li className="me-5">
            <h6 style={{display: 'inline-block',
                            fontSize:'12px',
                            
                            fontWeight: '300',
                            color: '#707070',
                            letterSpacing : '2px',
                            textTransform: 'uppercase'
                    }}>Most Popular</h6>
            </li>
            </ul>





<ArtistCards/>

            </div>
        </section>
    )
}

export default ArtistToFollow
