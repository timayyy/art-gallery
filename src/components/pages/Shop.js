import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { ArtConsumer } from "../../context";
import SingleProduct from "../hompage/SingleProduct";

export class Shop extends Component {
  render() {
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

                  <li className='breadcrumb-item active'>Shop</li>
                </ol>
              </div>
            </div>
          </div>
        </nav>
        <section className='pt-4 pb-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <h3 className='mb-5 text-center'>Shop</h3>
              </div>
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <div className='card-group'>
                <ArtConsumer>
                  {(value) => {
                    return value.products.map((product) => (
                      <SingleProduct key={product.id} product={product} />
                    ));
                  }}
                </ArtConsumer>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Shop;
