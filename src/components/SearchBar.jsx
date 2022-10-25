import React, { useState } from 'react';
import "../assets/css/list.css";

const Searchbar = ({ inputHandler }) => {

    return (
        <div style={{ width: '20%', paddingBottom: '20px' }}>
            <input className='search-bar' placeholder="Search.." onChange={inputHandler} />
        </div>
    )
}

export default Searchbar