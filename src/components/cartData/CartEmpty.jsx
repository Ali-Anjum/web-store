import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping}
  from "@fortawesome/free-solid-svg-icons"
const CartEmpty = () => {
  return (
    <div className="lower-1 text-center w-100 centered justify-content-center ">
    <FontAwesomeIcon
      className="selected icon-col1-lower1"
      icon={faCartShopping}
      size="2xl  "
    />
    <p className="icon-col1-lower1">Your cart is empty</p>
    <button className="button-1 "style={{border:'none'}}>
      Go shopping{" "}
      <FontAwesomeIcon className="my-auto" icon={faCartShopping} />
    </button>
  </div>
  )
}

export default CartEmpty