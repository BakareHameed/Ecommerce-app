import React from 'react'
import {Link} from 'react-router-dom'
import cart from '../images/cart.png'

const Navbar = () => {
  return (
    <div className='navbox flex flex-row justify-between align-center'>
        <div className='leftside w-[80px] h-[80px]'>
            <img src={cart} alt="" />
        </div>
        <div className="rightside flex flex-row">
            <Link to='/signup' className='navlinks'>SIGN UP</Link>
            <Link to='/login' className='navlinks'>LOGIN</Link>
        </div>
    </div>
  )
}

export default Navbar