import React from 'react'
import '../index.css'

const Header = () => {
    return (
       <header className='row block center'>
           <div>
               <a href='#/'>
                   <h1>Shopping App</h1>
               </a>
           </div>
           <div>
               <a href='#/cart' >Cart</a> <a href='#/cart' >SignIn</a>
               
           </div>
       </header>
    )
}

export default Header
