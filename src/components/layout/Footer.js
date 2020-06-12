import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer className='bg-dark bg-cover'>
          <div className='py-5 border-bottom border-gray-700'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 col-md-3'>
                  <h4 className='mb-3 text-white'>Company Name</h4>
                  <ul className='list-unstyled list-inline mb-3 mb-md-0'>
                    <li className='list-inline-item'>
                      <a href='#!' className='text-white'>
                        <i className='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='#!' className='text-white'>
                        <i className='fab fa-youtube'></i>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='#!' className='text-white'>
                        <i className='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='#!' className='text-white'>
                        <i className='fab fa-instagram'></i>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='#!' className='text-white'>
                        <i className='fab fa-medium'></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='col-6 col-sm'>
                  <h6 className='heading-xxs mb-4 text-white'>Support</h6>
                  <ul className='list-unstyled mb-3 mb-sm-0'>
                    <li>
                      <a className='text-white' href='./contact-us.html'>
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a className='text-white' href='./faq.html'>
                        FAQs
                      </a>
                    </li>

                    <li>
                      <a
                        className='text-white'
                        href='./shipping-and-returns.html'
                      >
                        Returns Policy
                      </a>
                    </li>
                  </ul>
                </div>

                <div className='col-6 col-sm'>
                  <h6 className='heading-xxs mb-4 text-white'>Company</h6>
                  <ul className='list-unstyled mb-0'>
                    <li>
                      <a className='text-white' href='./about.html'>
                        About us
                      </a>
                    </li>
                    <li>
                      <a className='text-white' href='#!'>
                        Become an associate{" "}
                      </a>
                    </li>
                    <li>
                      <a className='text-white' href='#!'>
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a className='text-white' href='#!'>
                        Privacy &amp; Cookie policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='col-6 col-sm'>
                  <h6 className='heading-xxs mb-4 text-white'>Contact</h6>
                  <ul className='list-unstyled mb-0'>
                    <li>
                      <a className='text-white' href='#!'>
                        1111111111111
                      </a>
                    </li>
                    <li>
                      <a className='text-white' href='#!'>
                        2222222222222
                      </a>
                    </li>
                    <li>
                      <a className='text-white' href='#!'>
                        email@email.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='py-3'>
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <p className='mb-3 mb-md-0 font-size-xxs text-muted'>
                    © 2020 All rights reserved.
                  </p>
                </div>
                {/* { <!-- Payment methods -->} */}
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
