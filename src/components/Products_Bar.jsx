import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGripVertical } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

const Products_Bar = (props)=> {
   const getval =event=>{
    console.log(event.target.value)
    setInput_value(event.target.value)
      
   }
  const [input_Value,setInput_value]=useState('none')
  return (
    <div className=" input-hero head2 ">
      <div  className="head2 ">
        <FontAwesomeIcon className="img-search-bar  " icon={faGripVertical} />    
        <select className="input " onClick={getval} placeholder=" All Categories" >
        <option className="" value='electronics'>shopping</option>
        <option value='new'>cashout</option>
        <option value='clothes'>Misc</option>
        <option value='accessories'>Clothing</option>
        <option value='trending'>Movie</option>
        <option value='6'>Food</option>
        </select>
      </div>
    </div>
  );
};

export default Products_Bar;
