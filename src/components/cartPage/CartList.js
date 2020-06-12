import React, { Fragment } from "react";
import CartItem from "./CartItem";
import { ArtConsumer } from "../../context";
import { Link } from "react-router-dom";
export default function CartList() {
  return (
    <ArtConsumer>
      {(value) => {
        const { cart, clearCart } = value;
        console.log(value, cart);
        return (
          <Fragment>
            {cart.map((item) => {
              return <CartItem key={item.id} item={item} value={value} />;
            })}

            <Link
              to='/'
              className='btn btn-block btn-outline-danger text-uppercase'
              type='button'
              onClick={() => {
                clearCart();
              }}
            >
              clear cart
            </Link>
          </Fragment>
        );
      }}
    </ArtConsumer>
  );
}
