import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

export class ContactUs extends Component {
  render() {
    return (
      <Fragment>
        <nav className='py-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <ol className='breadcrumb mb-0 font-size-xs'>
                  <li className='breadcrumb-item'>
                    <Link className='text-dark' href='/'>
                      Home
                    </Link>
                  </li>
                  <li className='breadcrumb-item active'>Contact Us</li>
                </ol>
              </div>
            </div>
          </div>
        </nav>

        <div className='hero-content pb-5 text-center'>
          <p className='text-muted'>Contact Us</p>
          <h1 className='hero-heading'>We are Here To Help You</h1>
          <div className='container'>
            <div className='row'>
              <div className='col-xl-8 offset-xl-2'>
                <p className='lead text-muted'>
                  Got a project in mind? We'd love to hear about it. Fill out
                  our form and we will contact you within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className='py-3' style={{ background: "#fafafa" }}>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4 text-center'>
                <i className='fas fa-map-marker-alt'></i>
                <h4 className='ff-base'>Address</h4>
                <p className='text-muted'>
                  13/25 New Avenue
                  <br />
                  New Heaven, 45Y 73J
                  <br />
                  England,
                  <strong>Great Britain</strong>
                </p>
              </div>

              <div className='col-md-4 text-center'>
                <i className='fas fa-phone-alt'></i>
                <h4 className='ff-base'>Call center</h4>
                <p className='text-muted'>
                  Sed do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua.
                </p>
                <p className='text-muted'>
                  <strong>111111111</strong>
                </p>
              </div>
              <div className='col-md-4 text-center'>
                <i className='fas fa-envelope'></i>
                <h4 className='ff-base'>Electronic support</h4>
                <p className='text-muted'>
                  Please feel free to write an email to us or to use our
                  electronic ticketing system.
                </p>
                <ul className='list-unstyled text-muted'>
                  <li>info@info.com</li>
                  <li>support@support.com</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className='py-3 mt-4'>
          <div className='container'>
            <div className='row'>
              {/* <div className='col-md-5'>
                <p className='text-muted'>
                  Effects present letters inquiry no an removed or friends.
                  Desire behind latter me though in. Supposing shameless am he
                  engrossed up additions. My possible peculiar together to.
                  Desire so better am cannot he up before points. Remember
                  mistaken opinions it pleasure of debating. Court front maids
                  forty if aware their at. Chicken use are pressed removed.
                </p>
                <p className='text-muted'>
                  Able an hope of body. Any nay shyness article matters own
                  removal nothing his forming. Gay own additions education
                  satisfied the perpetual. If he cause manor happy. Without
                  farther she exposed saw man led. Along on happy could cease
                  green oh.
                </p>
                <div className='social'>
                  <ul className='list-inline'>
                    <li className='list-inline-item'>
                      <a href='#' target='_blank'>
                        <i className='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='#' target='_blank'>
                        <i className='fab fa-facebook'></i>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='#' target='_blank'>
                        <i className='fab fa-instagram'></i>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='#' target='_blank'>
                        <i className='fab fa-pinterest'></i>
                      </a>
                    </li>
                    <li className='list-inline-item'>
                      <a href='#' target='_blank'>
                        <i className='fab fa-vimeo'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}

              <div className='col-12 mb-5 mb-md-0'>
                <header className='mb-5'>
                  <h2 className='text-uppercase'>Contact form</h2>
                </header>
                <form
                  className='form'
                  id='contact-form'
                  method='post'
                  action=''
                >
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
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default ContactUs;
