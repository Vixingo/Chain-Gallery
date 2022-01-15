import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

        function Setting_Notification() {
    return (
        <>
            <h1 className="fw-light mb-4">Notifications</h1>
            <h6 className="mb-4 fw-normal">We will notify on email on every activty you turn on below.</h6>
            
            
            <h2 className="fw-light mt-5 mb-3">Purchases</h2>  
            <FormControlLabel
                value="end"
                control={<Switch color="primary"  />}
                label=" Succesful artwork purchase"
                labelPlacement="end"
            />
            <br />
            <FormControlLabel
                value="end"
                control={<Switch color="primary" />}
                label=" Failed artwork purchase"
                labelPlacement="end"
            />
        
            <h2 className="fw-light mt-5 mb-3">Sales</h2>  
            <FormControlLabel
                value="end"
                control={<Switch color="primary" />}
                label=" Succesful artwork sale"
                labelPlacement="end"
            />
            <br />
            <FormControlLabel
                value="end"
                control={<Switch color="primary" />}
                label=" Failed artwork sale"
                labelPlacement="end"
            />
            
            <h2 className="fw-light mt-5 mb-3">Offers</h2>  
            <FormControlLabel
                value="end"
                control={<Switch color="primary"/>}
                label=" Received a bid/offer on your artwork"
                labelPlacement="end"
            />
            <br />
            <FormControlLabel
                value="end"
                control={<Switch color="primary" />}
                label=" Made an offer for an artwork"
                labelPlacement="end"
            />
            <br />
            <FormControlLabel
                value="end"
                control={<Switch color="primary" />}
                label=" A bid placed is accepted"
                labelPlacement="end"
            />
            
            <h2 className="fw-light mt-5 mb-3">Others</h2>  
            <FormControlLabel
                value="end"
                control={<Switch color="primary" />}
                label=" New follower"
                labelPlacement="end"
            />
            <br />
            <FormControlLabel
                value="end"
                control={<Switch color="primary" />}
                label=" New comment"
                labelPlacement="end"
            />
            <br />
            <FormControlLabel
                value="end"
                control={<Switch color="primary" />}
                label= " Marketing emails (promotions, newsletters and occasional surveys)"
                labelPlacement="end"
            />
        </>
    )
}

export default Setting_Notification
