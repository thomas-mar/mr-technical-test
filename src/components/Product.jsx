import 'bootstrap/dist/css/bootstrap.min.css'
import {useState } from 'react'


function Product({ product, addToCart }) {

  const [selectedSize, setSelectedSize] = useState({});
  const [error, setError] = useState(false);


  const handleAddToCart = () =>{
    if (!selectedSize.id){
      setError(true);
    }
    else{
      addToCart(product.id, selectedSize);
      //setSelectedSize({});
    }
  }

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setError(false);
  }

  return (
    <>
      {product ? (
        <>
          <div className="container">
            <div className="row mt-5">
              <div className="col-12 col-lg-5 product-image">
                {product.imageURL && <img className="w-100" src={product.imageURL} />}
              </div>
              <div className="col-12 col-lg-7 mt-5 mt-lg-0 product-details">
                <h1>{product.title}</h1>
                <hr />
                <h3>${product.price.toFixed(2)}</h3>
                <hr />
                <div className="description mb-4">
                  <p>{product.description}</p>

                </div>

                <div className="size-options mb-3">
                  <label className="d-block mb-3">Size<span className="required">*</span> <span className="selected-size">{selectedSize.label} </span></label>

                  <div className="options">
                    {product.sizeOptions && product.sizeOptions.map(sizeOption => (

                      <div className={`option me-2 ${selectedSize.id === sizeOption.id ? 'selected' : ''}`} key={sizeOption.id} onClick={() => handleSizeSelect(sizeOption)} ><span>{sizeOption.label}</span></div>

                    ))}
                  </div>
                </div>


                <button type="button" className="add-to-cart" onClick={() => handleAddToCart()}>Add To Cart</button>

                {error && <p className="mt-2 text-danger"><small>Size required. Please select a size.</small></p>}

              </div>

            </div>
          </div>
        </>
      ) : (
        <>
          <div class="container">
            <div class="row">
              <div class="col-12">
                Loading...

              </div>

            </div>
          </div>
        </>

      )

      }
    </>
  )
}

export default Product
