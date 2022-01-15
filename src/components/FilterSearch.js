import React from 'react'
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
function FilterSearch() {
    return (
        <>
            <section className="filter_section">
                <div className="search_div w-75">
                    <div className="s_input_div" style={{
                        position: "relative",
                    
                        
                    }}>
                    <TextField id="standard-basic" label="Search artworks" className="w-100" />
                    <SearchIcon style={{
                            position: "absolute",                       
                            bottom:"5px",
                            right: "0"
                        }}/>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default FilterSearch
