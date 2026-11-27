import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Categories from './Categories'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'
import Menubar from './Menubar'
import ProductDetails from './ProductDetails'
import { CartContext } from './CartContext'

function App() {
    const [cart,setcart] =useState([])
return(<>
<CartContext.Provider value={{cart:cart,setcart:setcart}}>

<Menubar></Menubar>

<Routes>
    <Route path="/" element={<Categories></Categories>}></Route>
    <Route path="/products/:category_name" element={<Products></Products>}></Route> 
   <Route path="/products/" element={<Products></Products>}></Route> 
   
    <Route path="/productdetails/:id" element={<ProductDetails></ProductDetails>}></Route>
</Routes>

</CartContext.Provider>
</>)  
}

export default App
