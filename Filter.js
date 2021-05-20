import React from 'react'

const Filter = (props) =>{

    const filter = props.filterName
    
    return(
        <div>
            Filter shown with: 
            <input value={filter} type="text" onChange={props.handleFilter}/>
        </div>
    )
}

export default Filter;