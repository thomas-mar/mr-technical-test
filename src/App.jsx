import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Product from './components/Product'

function App() {
  //const [count, setCount] = useState(0);
  const [itemCount, setItemCount] = useState(5);
  const [product, setProduct] = useState();


  const handleAddToCart = () => {
    setItemCount((itemCount) => itemCount + 1)
  };


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
    <Header itemCount = { itemCount } />
    <Product product={product}/>
    </>
  )
}

export default App
