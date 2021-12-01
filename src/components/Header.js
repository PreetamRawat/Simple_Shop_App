import React from 'react'
import '../index.css'

const Header = (props) => {
    const {countCartItems}= props;
    return (
       <header className='row block center'>
           <div>
               <a href='#/'>
                   <h1>Shopping App</h1>
               </a>
           </div>
           <div>
               <a href='#/cart' >
               
               Cart {'  '}
               {countCartItems?(
                   <button className='badge'>{countCartItems}</button>
               ):('')
               }
               
               </a><a href='#/cart' >SignIn</a>
               
           </div>
       </header>
    )
}

export default Header
