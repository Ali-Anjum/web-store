
import React from 'react'
import logo from '../data/IMAGE.svg'
import List from './List'

const Footer = () => {
  return (
    <div className='headers  footer-hero mb-0'>
        <img className='centered '  alt='logo mAKING TEXT WORD T ' src={logo}/>
        <div className='list-div'>
        <List className=' ' width={{width:'100%'}}/>
        </div>
        <hr className="hr line centered" />
     <p className='body1 text-center footer-text mb-0'>Copyright © 2023 TopAlts All rights reserved</p>
    </div>
  )
}

export default Footer