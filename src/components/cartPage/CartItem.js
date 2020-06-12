import React from "react";
import { Link } from "react-router-dom";
export default function CartItem({ item, value }) {
  const { id, title, img, artist, price, total, count } = item;
  const { increment, decrement, removeItem, handleDetail } = value;

  return (
    <li className='list-group-item'>
      <div className='row align-items-center'>
        <div className='col-md-3'>
          <Link to='/product'>
            <img
              src={img}
              alt='...'
              className='img-fluid'
              onClick={() => handleDetail(id)}
            />
          </Link>
        </div>
        <div className='col-md-9'>
          <div className='d-flex mb-2 font-weight-bold'>
            <a className='text-body' href='product.html'>
              {title}
            </a>
            <span className='ml-auto'>Price: N{price}</span>
          </div>
          <p className='font-size-sm text-muted'>by:{artist}</p>

          <div className='d-flex align-items-center'>
            <span className='btn btn-black mr-1' onClick={() => decrement(id)}>
              -
            </span>
            <span className='btn btn-black mr-1'>{count}</span>
            <span className='btn btn-black mr-1' onClick={() => increment(id)}>
              +
            </span>

            <span
              className='text-danger ml-auto btn'
              onClick={() => {
                console.log(id);
                removeItem(id);
              }}
            >
              <i className='fas fa-times'></i> Remove
            </span>
          </div>
          <span className='my-auto'>Item Total: N{total}</span>
        </div>
      </div>
    </li>
  );
}
