import React from "react";
import { Link } from "react-router-dom";
import { ArtConsumer } from "../../context";

const SingleProduct = ({
  product: {
    id,
    title,
    img,
    price,
    artist,
    info,
    inCart,
    isFeatured,
    newArrival,
  },
}) => {
  return (
    <>
      <ArtConsumer>
        {(value) => (
          <div className='col-md-6 col-lg-3'>
            <div className='card item'>
              <div
                className=' product p-3'
                onClick={() => value.handleDetail(id)}
              >
                <Link to='/product/id'>
                  <img
                    src={img}
                    alt=''
                    className='card-img-top img-fluid'
                    style={{ height: "129px" }}
                  />
                </Link>
                <div className='card-body text-center mt-4'>
                  <h6>{title}</h6>
                  <div className='price py-2'>
                    <span>N{price}</span>
                  </div>

                  <button
                    className='btn btn-outline-dark'
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
        )}
      </ArtConsumer>
    </>
  );
};

export default SingleProduct;
