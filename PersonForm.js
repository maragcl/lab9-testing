import React from "react";

const PersonForm = (props) => {

    const newName = props.newName
    const newPhone = props.newPhone

    return (
    <form>
        <div>
        name:
        <input value={newName} type="text" onChange={props.handleChange} />
        <br></br>
        Telefono:
        <input value={newPhone} type="text" onChange={props.handleChangePhone} />
        </div>

        <div>
        <button type="submit" onClick={props.handleClick}>
            add
        </button>
        </div>
    </form>
    );
};

export default PersonForm;