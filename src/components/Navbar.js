import { NavLink } from 'react-router-dom'

function Navbar({ cartData }) {
  return (
    <div className="bg-white sticky-top">
      <div className="container">
        <nav className="navbar px-0 navbar-expand-lg navbar-light bg-white">
          <NavLink
            className="navbar-brand position-absolute"
            to="/"
            href="./index.html"
            style={{
              left: '50%',
              transform: 'translate(-50%, -50%)',
              top: '50%'
            }}
          >
            竹炭專賣店之購物網
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse bg-white custom-header-md-open"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link ps-0" to="products">
                  產品列表
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="d-flex">
            <NavLink to="/cart" className="nav-link">
              <i className="bi bi-cart4"></i>
              <span class="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">
                {cartData?.carts?.length}
              </span>
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
