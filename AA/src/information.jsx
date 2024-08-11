import React, { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';

function BasicExample() {
    const [arr,setarr]=useState([]);
    function set(){
        setarr([1,2,3,4]);
    }
    useEffect(()=>{
        set();
    })
    return (
     
        <Dropdown options={arr}/>
      );
}

export default BasicExample;