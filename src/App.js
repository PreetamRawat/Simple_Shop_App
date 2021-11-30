import React,{useState} from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket'
import './index.css'
import data from './components/data'

const  App=()=> {

  const {products} = data;

  const [cartItems, setcartItems] = useState([])
  const onAdd=(product)=>{
    const exist=cartItems.find(x=>x.id=== product.id)
    if(exist){
      setcartItems(cartItems.map(x=>x.id===product.id?{...exist,qty:exist.qty +1} :x))
    
  }}
  return (
    <div className="App">
     <Header />
     <div className='row'>
       <Main products={products}/>
       <Basket cartItems={cartItems}/>
     </div>
    </div>
  );
}

export default App;
