import 'bootstrap/dist/css/bootstrap.min.css'

function Product({ product }) {

  return (
    <>
      {product ? (
        <>
          <div className="container">
              <div className="row">
                <div className="col-12 col-lg-6">
                  {product.imageURL && <img src={product.imageURL} />}
                </div>
                <div className="col-12 col-lg-6">
                {product.title}
                </div>
              </div>
          </div>
        </>
      ) : (
        <>
        Product not Found
      </>
        
      )

}
    </>
  )
}

export default Product
