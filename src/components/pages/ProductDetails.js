import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { ArtConsumer } from "../../context";

export class ProductDetails extends Component {
  // const addToCart = (id) => {
  //   console.log(`this is the id clicked ${id}`);
  // };

  // getItem(id);

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <ArtConsumer>
        {(value) => {
          const {
            id,
            title,
            img,
            price,
            artist,
            info,
            inCart,
          } = value.detailProduct;
          return (
            <Fragment>
              <nav className='py-5'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-12'>
                      <ol className='breadcrumb mb-0 font-size-xs'>
                        <li className='breadcrumb-item'>
                          <Link className='text-dark' to='/'>
                            Home
                          </Link>
                        </li>
                        <li className='breadcrumb-item'>
                          <Link className='text-dark' to='/shop'>
                            Shop
                          </Link>
                        </li>
                        <li className='breadcrumb-item active'>Details</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </nav>
              <section id='product' className='py-3'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <img src={img} alt='art-img' className='img-fluid' />
                      <div className='form-row pt-4'>
                        <div className='col'>
                          <button
                            type='submit'
                            className='btn btn-danger form-control'
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='col-sm-6 py-5'>
                      <div className='row mb-1'>
                        <div className='col'>
                          <a className='text-muted' href='shop.html'>
                            {artist}
                          </a>
                        </div>
                      </div>
                      <h3 className='mb-2'>{title}</h3>
                      <hr className='m-0' />

                      <div className='my-3'>
                        <small className='font-weight-bold text-muted'>
                          <strike>N350000</strike>
                        </small>
                        <span className='ml-1 font-weight-bolder text-primary'>
                          N{price}
                        </span>
                        <span className='font-size-sm ml-1'>(In Stock)</span>
                      </div>
                      <div className='form-row mb-7'>
                        <div className='col-12 col-lg'>
                          {" "}
                          <button
                            className='btn btn-block btn-dark mb-2'
                            disabled={inCart ? true : false}
                            onClick={() => {
                              value.addToCart(id);
                              value.openModal(id);
                            }}
                          >
                            {inCart ? (
                              <p className='text-capitalize mb-0' disabled>
                                in cart
                              </p>
                            ) : (
                              <span>Add to Cart</span>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className='pt-5'>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-12'>
                          <div className='nav nav-tabs nav-overflow justify-content-start justify-content-md-center border-bottom'>
                            <a
                              className='nav-link active'
                              data-toggle='tab'
                              href='#descriptionTab'
                            >
                              Description
                            </a>
                            <a
                              className='nav-link'
                              data-toggle='tab'
                              href='#shippingTab'
                            >
                              Shipping &amp; Return
                            </a>
                          </div>
                          <div className='tab-content'>
                            <div
                              className='tab-pane fade active show'
                              id='descriptionTab'
                            >
                              <div className='row justify-content-center py-9'>
                                <div className='col-12 col-lg-10 col-xl-8'>
                                  <div className='row'>
                                    <div className='col-12'>
                                      <p className='text-muted'>{info}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className='tab-pane fade' id='shippingTab'>
                              <div className='row justify-content-center py-9'>
                                <div className='col-12 col-lg-10 col-xl-8'>
                                  <div className='table-responsive'>
                                    <table className='table table-bordered table-sm table-hover'>
                                      <thead>
                                        <tr>
                                          <th>Shipping Options</th>
                                          <th>Delivery Time</th>
                                          <th>Price</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>Standard Shipping</td>
                                          <td>
                                            Delivery in 5 - 7 working days
                                          </td>
                                          <td>$8.00</td>
                                        </tr>
                                        <tr>
                                          <td>Express Shipping</td>
                                          <td>
                                            Delivery in 3 - 5 working days
                                          </td>
                                          <td>$12.00</td>
                                        </tr>
                                        <tr>
                                          <td>1 - 2 day Shipping</td>
                                          <td>
                                            Delivery in 1 - 2 working days
                                          </td>
                                          <td>$12.00</td>
                                        </tr>
                                        <tr>
                                          <td>Free Shipping</td>
                                          <td>
                                            Living won't the He one every subdue
                                            meat replenish face was you morning
                                            firmament darkness.
                                          </td>
                                          <td>$0.00</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </section>
            </Fragment>
          );
        }}
        {/* <section id='product' className='py-3'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6'>
                <img
                  src='./assets/img/mr-tt-xb0wLfZH9Zo-unsplash.jpg'
                  alt='art-img'
                  className='img-fluid'
                />
                <div className='form-row pt-4'>
                  <div className='col'>
                    <button
                      type='submit'
                      className='btn btn-danger form-control'
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
              <div className='col-sm-6 py-5'>
                <div className='row mb-1'>
                  <div className='col'>
                    <a className='text-muted' href='shop.html'>
                      Artist Name
                    </a>
                  </div>
                </div>
                <h3 className='mb-2'>Art 1</h3>
                <hr className='m-0' />

                <div className='my-3'>
                  <small className='font-weight-bold text-muted'>
                    <strike>N350000</strike>
                  </small>
                  <span className='ml-1 font-weight-bolder text-primary'>
                    N150000
                  </span>
                  <span className='font-size-sm ml-1'>(In Stock)</span>
                </div>
                <div className='form-row mb-7'>
                  <div className='col-12 col-lg'> */}
        {/* <button
                  className='btn btn-block btn-dark mb-2'
                  disabled={inCart ? true : false}
                  onClick={() => {
                    addToCart(2);
                  }}
                >
                  {inCart ? (
                    <p className='text-capitalize mb-0' disabled>
                      in cart
                    </p>
                  ) : (
                    <span>Add to Cart</span>
                  )}
                </button> */}
        {/* </div>
                </div>
              </div>
            </div> */}
        {/* <section className='pt-5'>
              <div className='container'>
                <div className='row'>
                  <div className='col-12'>
                    <div className='nav nav-tabs nav-overflow justify-content-start justify-content-md-center border-bottom'>
                      <a
                        className='nav-link active'
                        data-toggle='tab'
                        href='#descriptionTab'
                      >
                        Description
                      </a>
                      <a
                        className='nav-link'
                        data-toggle='tab'
                        href='#shippingTab'
                      >
                        Shipping &amp; Return
                      </a>
                    </div>
                    <div className='tab-content'>
                      <div
                        className='tab-pane fade active show'
                        id='descriptionTab'
                      >
                        <div className='row justify-content-center py-9'>
                          <div className='col-12 col-lg-10 col-xl-8'>
                            <div className='row'>
                              <div className='col-12'>
                                <p className='text-muted'>
                                  Won't herb first male seas, beast. Let upon,
                                  female upon third fifth every. Man subdue rule
                                  after years herb after form. And image may,
                                  morning. Behold in tree day sea that together
                                  cattle whose. Fifth gathering brought bearing.
                                  Abundantly creeping whose. Beginning form have
                                  void two. A whose.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className='tab-pane fade' id='shippingTab'>
                        <div className='row justify-content-center py-9'>
                          <div className='col-12 col-lg-10 col-xl-8'>
                            <div className='table-responsive'>
                              <table className='table table-bordered table-sm table-hover'>
                                <thead>
                                  <tr>
                                    <th>Shipping Options</th>
                                    <th>Delivery Time</th>
                                    <th>Price</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Standard Shipping</td>
                                    <td>Delivery in 5 - 7 working days</td>
                                    <td>$8.00</td>
                                  </tr>
                                  <tr>
                                    <td>Express Shipping</td>
                                    <td>Delivery in 3 - 5 working days</td>
                                    <td>$12.00</td>
                                  </tr>
                                  <tr>
                                    <td>1 - 2 day Shipping</td>
                                    <td>Delivery in 1 - 2 working days</td>
                                    <td>$12.00</td>
                                  </tr>
                                  <tr>
                                    <td>Free Shipping</td>
                                    <td>
                                      Living won't the He one every subdue meat
                                      replenish face was you morning firmament
                                      darkness.
                                    </td>
                                    <td>$0.00</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section> */}
      </ArtConsumer>
    );
  }
}

export default ProductDetails;
