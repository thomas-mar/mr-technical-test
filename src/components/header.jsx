import 'bootstrap/dist/css/bootstrap.min.css'

function Header( { itemCount} ) {

  return (
    <>
        <div className="header header-background w-100">
            <div className="container text-end">
                My Cart ( {itemCount} )
            </div>
        </div>
    </>
  )
}

export default Header
