import React, { Component } from "react";

export class NewsLetter extends Component {
  render() {
    return (
      <div>
        <section className='mt-4 py-4 bg-light'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 col-md-10 col-lg-8 col-xl-6'>
                <div className='mb-4 text-center text-muted'>
                  <h5>NEWSLETTER</h5>
                  <p>Join our list!</p>
                </div>
                <form className='mb-5'>
                  <div className='form-row align-items-start'>
                    <div className='col'>
                      <input
                        type='email'
                        className='form-control form-control-white form-control-lg'
                        placeholder='Enter Email *'
                      />
                    </div>
                    <div className='col-auto'>
                      <button
                        type='submit'
                        className='btn btn-outline-dark btn-lg'
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <small>*Don't worry we don't spam!</small>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default NewsLetter;
