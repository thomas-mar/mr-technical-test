import { useEffect, useState } from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './assets/sass/main.scss'
import Header from './components/header'
import Product from './components/Product'

function App() {
  //const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  const [product, setProduct] = useState();


  const addToCart = (id, selectedSize) => {
    const currentCart = [...cart];

    const cartIndex = currentCart.findIndex(
      item => item.id === id && item.size.id === selectedSize.id
    );

    if (cartIndex !== -1){
      currentCart[cartIndex].quantity++
      setCart(currentCart);
    }
    else{
      setCart([...cart, {
        id: product.id,
        title: product.title,
        imageURL: product.imageURL,
        price: product.price,
        size: selectedSize,
        quantity: 1 }]);

    }


    //setCart([...cart, { ...product, size: selectedSize }]);
  };

  const clearCart = () =>{
    setCart([]);
  }

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);



  const getProductDetails = () => {
    fetch('https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product')
    .then((response) => response.json())
    .then((data) => {
      setProduct(data);
    });
  }


  useEffect(() =>{
    getProductDetails();
  }, []);



  return (
    <>
    <Header cart={cart} cartQuantity={totalItemsInCart} clearCart={clearCart} />
    <Product product={product} addToCart={addToCart}/>
    </>
  )
}

export default App
