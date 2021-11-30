import React from 'react'
import '../index.css'

const Product=(props) => {
    const {product}= props;
    return (
        <div>
           <img className='small' src={product.image} alt={product.name} />
           <h3>{product.name}</h3>
           <div>${product.price}</div>
           <div>
               <button>Add TO Cart</button>
           </div>
        </div>
    )
}

export default Product
