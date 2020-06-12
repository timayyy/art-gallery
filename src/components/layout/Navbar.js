import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { ArtConsumer } from "../../context";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <p className='lead text-center'>
              Got a project in mind? We'd love to hear about it. Fill out our
              form and we will contact you within 24 hours.
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className='form' id='contact-form' method='post' action=''>
            <div className='controls'>
              <div className='row'>
                <div className='col-sm-6'>
                  <div className='form-group'>
                    <label className='form-label' for='name'>
                      Your firstname *
                    </label>
                    <input
                      className='form-control'
                      type='text'
                      name='name'
                      id='name'
                      placeholder='Enter your firstname'
                      required='required'
                    />
                  </div>
                </div>
                <div className='col-sm-6'>
                  <div className='form-group'>
                    <label className='form-label' for='surname'>
                      Your lastname *
                    </label>
                    <input
                      className='form-control'
                      type='text'
                      name='surname'
                      id='surname'
                      placeholder='Enter your  lastname'
                      required='required'
                    />
                  </div>
                </div>
              </div>
              <div className='form-group'>
                <label className='form-label' for='email'>
                  Your email *
                </label>
                <input
                  className='form-control'
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Enter your  email'
                  required='required'
                />
              </div>
              <div className='form-group'>
                <label className='form-label' for='message'>
                  Your message for us *
                </label>
                <textarea
                  className='form-control'
                  rows='4'
                  name='message'
                  id='message'
                  placeholder='Enter your message'
                  required='required'
                ></textarea>
              </div>
              <button className='btn btn-outline-dark' type='submit'>
                Send message
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <header id='header'>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
            <form className='form-inline my-2 my-lg-0'>
              <input
                className='form-control mr-sm-2'
                type='search'
                placeholder='Search'
              />
              <button
                className='btn btn-outline-success my-2 my-sm-0'
                type='submit'
              >
                Search
              </button>
            </form>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <ul className='d-flex navbar-nav ml-auto mt-2 mt-lg-0'>
            <li className='nav-item'>
              <ArtConsumer>
                {(value) => {
                  const { cart } = value;
                  return (
                    <Link
                      to='/cart'
                      className='nav-link px-3 border-right text-white'
                    >
                      <i className='fas fa-cart-plus mr-3'></i>Cart (
                      {cart.length})
                    </Link>
                  );
                }}
              </ArtConsumer>
            </li>
          </ul>
        </nav>
        <div className='navbar navbar-expand-xl navbar-light bg-light'>
          <Link className='navbar-brand d-xl-none' to='/'>
            Company Name
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarTogglerDemo03'
            aria-controls='navbarTogglerDemo03'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='navbar-collapse collapse' id='navbarTogglerDemo03'>
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                <Link className='nav-link' to='/'>
                  Home <span className='sr-only'>(current)</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/shop'>
                  Shop
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/about-us'>
                  About
                </Link>
              </li>

              <li className='nav-item'>
                <Link className='nav-link' to='/contact-us'>
                  Contact
                </Link>
              </li>
            </ul>
            <Link className='navbar-brand mx-auto d-none d-xl-block' to='/'>
              Company Name
            </Link>

            <ul className='navbar-nav'>
              <li className='nav-item' onClick={handleShow}>
                <Link className='nav-link'>Become an Associate</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </Fragment>
  );
};
export default Navbar;
