import React from 'react'

const Person = (props)=>{

    const name = props.name
    const telefono = props.phone
    return(
        <p>{name} - {telefono}</p>
    )
}

export default Person;