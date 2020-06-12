import React, { Component, Fragment } from "react";

export class WhatWeDo extends Component {
  render() {
    return (
      <Fragment>
        <section className='mt-4 py-4 bg-light'>
          <div className='container'>
            <div className='row'>
              <div className='col-12 col-md-6 col-lg-4'>
                <div className='mb-3 mb-lg-0 text-center p-2'>
                  <i className='fas fa-shipping-fast text-muted'></i>
                  <h6 className='heading-xxs mb-1'>Fast Delivery</h6>
                  <p className='mb-0 font-size-sm text-muted'>
                    Fast and Reliable delivery process
                  </p>
                </div>
              </div>
              <div className='col-12 col-md-6 col-lg-4'>
                <div className='mb-3 mb-lg-0 text-center p-2'>
                  <i className='fas fa-exchange-alt font-size-lg text-muted'></i>
                  <h6 className='mb-1 heading-xxs'>Free returns</h6>
                  <p className='mb-0 font-size-sm text-muted'>
                    Return money within 30 days
                  </p>
                </div>
              </div>
              <div className='col-12 col-md-6 col-lg-4'>
                <div className='mb-3 mb-md-0 text-center p-2'>
                  <i className='fas fa-lock text-muted'></i>
                  <h6 className='mb-1 heading-xxs'>Secure shopping</h6>
                  <p className='mb-0 font-size-sm text-muted'>
                    You're in safe hands
                  </p>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default WhatWeDo;
