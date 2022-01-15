import React from 'react'
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from '@material-ui/core/Typography';


function FilterSwitch() {
    return (
        <>
            <section className="filter_switch mt-3" >
                <div className="switch_holder text-center">




                <FormControlLabel
                    value="start"
                    control={<Checkbox  color="primary" />}
                    label={<Typography style={{fontWeight:"500"}}> Birth </Typography>}
                    labelPlacement="start"
                />
	

                <FormControlLabel 
                    value="start"
                    control={<Checkbox  color="primary" />}
                    label={<Typography style={{fontWeight:"500"}}> 
                Burn 
        </Typography>}
                    
                    labelPlacement="start" 
                />
                
                </div>
            </section>
        </>
    )
}

export default FilterSwitch
