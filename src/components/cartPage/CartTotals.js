import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function CartTotals({ value }) {
  const { cartSubTotal, cartTax, cartTotal } = value;

  return (
    <Fragment>
      <div className='col-12'>
        <div className='card mb-3 bg-light'>
          <div className='card-body'>
            <ul className='list-group list-group-sm list-group-flush-y list-group-flush-x'>
              <li className='list-group-item d-flex'>
                <span>Subtotal</span>
                <span className='ml-auto font-size-sm'>N {cartSubTotal}</span>
              </li>
              <li className='list-group-item d-flex'>
                <span>Tax</span>
                <span className='ml-auto font-size-sm'>N {cartTax}</span>
              </li>
              <li className='list-group-item d-flex font-size-lg font-weight-bold'>
                <span>Total</span>
                <span className='ml-auto font-size-sm'>N {cartTotal}</span>
              </li>
              <li className='list-group-item font-size-sm text-center text-muted'>
                Shipping cost calculated at Checkout *
              </li>
            </ul>
          </div>
          <Link className='btn btn-block btn-dark my-4' to='/checkout'>
            Proceed to Checkout
          </Link>
          <Link className='btn btn-link btn-sm px-0 text-body' to='/shop'>
            <i className='fas fa-arrow-left mr-2'></i> Continue Shopping
          </Link>
        </div>
      </div>
    </Fragment>
  );
}
