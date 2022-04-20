import React, { useState  } from "react";

export const searchBar = (props) => {
    return(
        <input type='search' className='search' placeholder={props.placeholder} onChange={props.handleChange} />
    )
}