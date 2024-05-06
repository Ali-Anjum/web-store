import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTelegram } from '@fortawesome/free-brands-svg-icons'

const List = (props) => {
  return (
<div className='text-white head1 m-0 h-0 d-flex justify-content-around list-header-div my-auto ' style={props.width}  >
  <a >Support</a>
  <a className='selected'>shop</a>
  <a >FAQ</a>
  <a >Reviews <FontAwesomeIcon className='' icon={faTelegram} /></a>
</div>

  )
}

export default List