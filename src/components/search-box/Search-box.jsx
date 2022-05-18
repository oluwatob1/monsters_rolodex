import React from "react";
import './Search-box.css';

export const Searchbox = ({placeholder, handleChange}) => {
    return(
        <input className="search" type='search' placeholder={placeholder} onChange={handleChange} />
    )
    
}