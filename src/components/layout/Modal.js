import React, { Component } from "react";
import { ArtConsumer } from "../../context";
import "../../Modal.css";
import { Link } from "react-router-dom";

export class Modal extends Component {
  render() {
    return (
      <ArtConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className='container'>
                <div className='row'>
                  <div className='modal-div'>
                    <div
                      id='modal'
                      className='col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5'
                    >
                      <h5>Item added to cart</h5>
                      <img src={img} className='img-fluid' alt='product' />
                      <h5>{title}</h5>
                      <h5 className='text-muted'>price: N {price}</h5>
                      <div className='row'>
                        <div className='col-md-6'>
                          <Link to='/'>
                            <button
                              className='btn btn-outline-primary'
                              onClick={() => closeModal()}
                            >
                              Continue Shopping
                            </button>
                          </Link>
                        </div>
                        <div className='col-md-6'>
                          <Link to='/cart'>
                            <button
                              className='btn btn-outline-dark mt-lg-0 mt-2'
                              onClick={() => closeModal()}
                            >
                              Go to Cart
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ArtConsumer>
    );
  }
}

export default Modal;
