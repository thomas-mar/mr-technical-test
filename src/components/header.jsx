import { CartFill } from 'react-bootstrap-icons'


function Header({ cart, cartQuantity, clearCart }) {

    const handleClearCart = () =>{
        clearCart();
    }

    return (
        <>



            <nav className="navbar navbar-expand navbar-light light-bg py-0 mt-3">
                <div className="container">


                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="d-none d-lg-inline-block">My Cart</span>
                                    <span className="d-inline-block d-lg-none"><CartFill /></span>
                                     ( {cartQuantity} )
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end rounded-0" aria-labelledby="navbarDropdown" style={{width: '300px'}}>
                                    {cart && cart.map((item, index) => (
                                        <li key={index}>
                                            <div className="row p-3">
                                                <div className="col-4">
                                                    <img className="w-100" src={item.imageURL}/>
                                                </div>
                                                <div className="col-8">
                                                    <p>{item.title}</p>
                                                    <p>{item.quantity}x <strong>${item.price.toFixed(2)}</strong></p>
                                                    <p>Size: {item.size.label}</p>
                                                </div>
                                            
                                            </div></li>

                                    ))}
                                    {/* {cart.length > 0 && <li className="p-2 px-3"><button className="button w-100" onClick={() => handleClearCart()}> Clear Cart</button></li>} */}

                                    {cart.length === 0 && <li className="p-2 px-3"> Cart is Empty</li>}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header
