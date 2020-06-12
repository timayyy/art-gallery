import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { ArtConsumer } from "../../context";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartTotals from "./CartTotals";

export class Cart extends Component {
  render() {
    return (
      <Fragment>
        <ArtConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <Fragment>
                  <nav className='py-5'>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-12'>
                          <ol className='breadcrumb mb-0 font-size-xs text-muted'>
                            <li className='breadcrumb-item'>
                              <Link className='text-muted' to='/'>
                                Home
                              </Link>
                            </li>

                            <li className='breadcrumb-item active'>
                              Shopping Cart
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </nav>
                  <section className='pt-4 pb-5'>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-12'>
                          <h3 className='mb-5 text-center'>Shopping Cart</h3>
                        </div>
                      </div>
                    </div>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-12 mb-4'>
                          <ul className='list-group list-group-lg list-group-flush-x mb-6'>
                            <CartColumns />
                          </ul>
                        </div>

                        <CartTotals value={value} />
                      </div>
                    </div>
                  </section>
                </Fragment>
              );
            } else {
              return (
                <Fragment>
                  <nav className='py-5'>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-12'>
                          <ol className='breadcrumb mb-0 font-size-xs text-muted'>
                            <li className='breadcrumb-item'>
                              <Link className='text-muted' to='/'>
                                Home
                              </Link>
                            </li>

                            <li className='breadcrumb-item active'>
                              Shopping Cart
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </nav>
                  <section className='pt-4 pb-5'>
                    <div className='container'>
                      <div className='row'>
                        <div className='col-12'>
                          <h3 className='mb-5 text-center'>Shopping Cart</h3>
                        </div>
                      </div>
                    </div>
                    <EmptyCart />
                  </section>
                </Fragment>
              );
            }
          }}
        </ArtConsumer>
      </Fragment>
    );
  }
}

export default Cart;
