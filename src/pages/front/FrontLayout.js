function FrontLayout() {
  return (
    <>
      <div className="position-relative">
        <div
          className="position-absolute"
          style={{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundImage:
              'url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80)',
            backgroundPosition: 'center center',
            opacity: 0.1
          }}
        ></div>
        <div
          className="container d-flex flex-column"
          style={{ minHeight: '100vh' }}
        >
          <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="./index.html">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav">
                <a
                  className="nav-item nav-link me-4 active"
                  href="./index.html"
                >
                  Home <span className="sr-only">(current)</span>
                </a>
                <a className="nav-item nav-link me-4" href="./product.html">
                  Product
                </a>
                <a className="nav-item nav-link me-4" href="./detail.html">
                  Detail
                </a>
                <a className="nav-item nav-link" href="./cart.html">
                  <i className="fas fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          </nav>
          <div className="row justify-content-center my-auto">
            <div className="col-md-4 text-center">
              <h2>Lorem ipsum.</h2>
              <p className="text-muted mb-0">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod.
              </p>
              <button className="btn btn-dark rounded-0 mt-6">
                Lorem ipsum.
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 mt-md-4">
            <div className="card border-0 mb-4">
              <img
                src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
                className="card-img-top rounded-0"
                alt="..."
              />
              <div className="card-body text-center">
                <h4>Lorem ipsum</h4>
                <div className="d-flex justify-content-between">
                  <p className="card-text text-muted mb-0">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-md-4">
            <div className="card border-0 mb-4">
              <img
                src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
                className="card-img-top rounded-0"
                alt="..."
              />
              <div className="card-body text-center">
                <h4>Lorem ipsum</h4>
                <div className="d-flex justify-content-between">
                  <p className="card-text text-muted mb-0">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-md-4">
            <div className="card border-0 mb-4">
              <img
                src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
                className="card-img-top rounded-0"
                alt="..."
              />
              <div className="card-body text-center">
                <h4>Lorem ipsum</h4>
                <div className="d-flex justify-content-between">
                  <p className="card-text text-muted mb-0">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light mt-7">
        <div className="container">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row justify-content-center py-7">
                  <div className="col-md-6 text-center">
                    <h3>Lorem ipsum.</h3>
                    <p className="my-5">
                      “Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat.”
                    </p>
                    <p>
                      <small>—Lorem ipsum dolor sit amet.—</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row justify-content-center py-7">
                  <div className="col-md-6 text-center">
                    <h3>Lorem ipsum.</h3>
                    <p className="my-5">
                      “Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat.”
                    </p>
                    <p>
                      <small>—Lorem ipsum dolor sit amet.—</small>
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row justify-content-center py-7">
                  <div className="col-md-6 text-center">
                    <h3>Lorem ipsum.</h3>
                    <p className="my-5">
                      “Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                      sed diam nonumy eirmod tempor invidunt ut labore et dolore
                      magna aliquyam erat.”
                    </p>
                    <p>
                      <small>—Lorem ipsum dolor sit amet.—</small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container my-7">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 m-auto text-center">
            <h4 className="mt-4">Lorem ipsum</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
          </div>
        </div>
        <div className="row flex-row-reverse justify-content-between mt-4">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="col-md-4 m-auto text-center">
            <h4 className="mt-4">Lorem ipsum</h4>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-light py-4">
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start">
            <p className="mb-0 fw-bold">Lorem ipsum dolor sit amet.</p>
            <div className="input-group w-md-50 mt-md-0 mt-3">
              <input
                type="text"
                className="form-control rounded-0"
                placeholder=""
              />
              <div className="input-group-append">
                <button
                  className="btn btn-dark rounded-0"
                  type="button"
                  id="search"
                >
                  Lorem ipsum
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark py-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4">
            <a className="text-white h4" href="./index.html">
              LOGO
            </a>
            <ul className="d-flex list-unstyled mb-0 h4">
              <li>
                <a href="#" className="text-white mx-3">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white mx-3">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white ms-3">
                  <i className="fab fa-line"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white">
            <div className="mb-md-0 mb-1">
              <p className="mb-0">02-3456-7890</p>
              <p className="mb-0">service@mail.com</p>
            </div>
            <p className="mb-0">© 2020 LOGO All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FrontLayout
