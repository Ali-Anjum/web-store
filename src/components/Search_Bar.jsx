import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Search_Products_Bar = (props) => {

  return (
    <div className={` input-hero head2 ${props.centered} `} style={{width:props.width}}>
      <div>
      <FontAwesomeIcon className={` ${props.Icondisplay} img-search-bar `} icon={faMagnifyingGlass} />
      <input type={props.type} className={`input w-${props.InputWidth}`}  placeholder={`${props.text || 'type item to search'}`}
/>
      </div>
      
    </div>
  )
}

export default Search_Products_Bar