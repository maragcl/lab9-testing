import React, { useState } from 'react'

import './App.css';
import Filter from './Components/Filter';
import Person from './Components/Person';
import PersonForm from './Components/PersonForm';

const App = () => {

  const [ persons, setPersons ] = useState(
    [
      { 
        name: 'Arto Hellas',
        telefono:'054-338690'
      }
    ]
  ) 

  const [ newName, setNewName ] = useState('')

  const [ newPhone, setNewPhone ] = useState('')

  const [ filter, setFilter ] = useState('')


  const handleFilter = (event)=>{

    const nameFilter = event.target.value
    setFilter(nameFilter)
  }

  const handleChange = (event) =>{
    const nuevoNombre = event.target.value
    setNewName(nuevoNombre)
  }

  const handleChangePhone = (event) =>{
    const nuevoTelefono = event.target.value
    setNewPhone(nuevoTelefono)
  }

  const handleClick = (e)=>{
    e.preventDefault();
    
    var existe = false

    for(var i = 0; i < persons.length; i++) {
      var name = persons[i].name;

      if(newName == name){
        existe = true        
      }
    }

    if(existe==true){
      window.alert(`${newName} is already added to the phonebook`);      
    }else{      
      const newPerson = {
        name: newName,
        telefono:newPhone
      }

      setPersons([
        ...persons,
        newPerson
      ])

      setNewName('')
      setNewPhone('')
    }

  }

  return (
    <div style={{margin:20}}>
      <h2>Phonebook</h2>

      <Filter 
        filterName={filter} 
        handleFilter={handleFilter} 
      />

      <PersonForm 
        newName={newName}
        newPhone={newPhone}
        handleChange={handleChange}
        handleChangePhone={handleChangePhone}
        handleClick={handleClick}
      />

      <h2>Numbers</h2>

      {
        persons.map((person) => person.name.includes(filter) == true  && (
          
          <Person 
            key={person.name} 
            name={person.name} 
            phone={person.telefono} 
          />
          
        ))
      }

    </div>
  )
}

export default App;