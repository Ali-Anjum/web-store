import React from 'react'
import {faTrash} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartItem = () => {
  return (
    <div className='payment-method-nth-child cart-item-filled'  style={{border:'none', gap:'25px 25px'}}>
        <div className='cart-filled-sub-div d-flex justify-content-between'>
        <p className='head1 bold text-product-name ' >Marriott Bonvoy [10K - 25K Points]</p>
        <div className='d-flex hero-button '>
            <button className='inc button-cart rounded '>-
            </button>
            <input className=' button-cart rounded text-center input-show-amount  my-auto head2' type='text ' value={'2'} disabled/>
            <button className='btndec button-cart rounded'>
                +
            </button>
            <button className='button-cart text-danger'>
            <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
        </div>
        <div className='d-flex justify-content-between'>
        <div>
            <img className='img-item-cart' src='https://cdn.discordapp.com/attachments/1042540425963131032/1170419497648263178/marriot.gif?ex=6558f919&is=65468419&hm=f193bb47866a18e170973da46cad75a3f39f5c7eacb108c659179b20574a985e&
' alt='product looks good'
/>
        </div>
        <div className='ind-price-all-price mt-auto'>
            <p className='products head1 mb-0' >1.00$x6</p>
            <p className='bold head01 align-right mb-0'>6.00$</p>
        </div>
        </div>
    </div>
  )
}

export default CartItem