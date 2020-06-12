import React, { Component } from "react";
import SingleProduct from "./SingleProduct";
import { ArtConsumer } from "../../context";

export class NewArrivals extends Component {
  render() {
    return (
      <div className='container py-5'>
        <h4>NEW ARRIVALS</h4>
        <hr />

        <div className='container'>
          <div className='row'>
            <div className='card-group'>
              <ArtConsumer>
                {(value) => {
                  return value.products.map(
                    (product) =>
                      product.newArrival && (
                        <SingleProduct key={product.id} product={product} />
                      )
                  );
                }}
              </ArtConsumer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewArrivals;
