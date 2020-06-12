/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */

export const detailProduct = {
  id: 1,
  title: "Art 2",
  img: "img/art5.jpg",
  price: 10,
  artist: "google",
  info:
    "Lorem ipsum dolor amet offal butcher quinoa sustainable gastropub, echo park actually green juice sriracha paleo. Brooklyn sriracha semiotics, DIY coloring book mixtape craft beer sartorial hella blue bottle. Tote bag wolf authentic try-hard put a bird on it mumblecore. Unicorn lumbersexual master cleanse blog hella VHS, vaporware sartorial church-key cardigan single-origin coffee lo-fi organic asymmetrical. Taxidermy semiotics celiac stumptown scenester normcore, ethical helvetica photo booth gentrify.",
  inCart: false,
  isFeatured: false,
  count: 0,
  total: 0,
};

// <Fragment>
//   <ArtConsumer>
//     {(value) => {
//       const { cart } = value;

//       if (cart.length > 0) {
//         return (
//           <Fragment>
//             <nav className='py-5'>
//               <div className='container'>
//                 <div className='row'>
//                   <div className='col-12'>
//                     <ol className='breadcrumb mb-0 font-size-xs text-muted'>
//                       <li className='breadcrumb-item'>
//                         <Link className='text-muted' to='/'>
//                           Home
//                         </Link>
//                       </li>
//                       <li className='breadcrumb-item active'>
//                         Shopping Cart
//                       </li>
//                     </ol>
//                   </div>
//                 </div>
//               </div>
//             </nav>
//             <section className='pt-4 pb-5'>
//               <div className='container'>
//                 <div className='row'>
//                   <div className='col-12'>
//                     <h3 className='mb-5 text-center'>Shopping Cart</h3>
//                   </div>
//                 </div>
//                 <div className='row'>
//                   <div className='col-12 col-md-7 mb-4'>
//                     <ul className='list-group list-group-lg list-group-flush-x mb-6'>
//                       <li className='list-group-item'>
//                         <div className='row align-items-center'>
//                           <div className='col-3'>
//                             <Link to='/product'>
//                               <img
//                                 src='assets/img/matthew-t-rader-YAh2Ty8fSYA-unsplash.jpg'
//                                 alt='...'
//                                 className='img-fluid'
//                               />
//                             </Link>
//                           </div>
//                           <div className='col'>
//                             <div className='d-flex mb-2 font-weight-bold'>
//                               <a
//                                 className='text-body'
//                                 href='product.html'
//                               >
//                                 Art 1
//                               </a>
//                               <span className='ml-auto'>$40.00</span>
//                             </div>
//                             <p className='mb-3 font-size-sm text-muted'>
//                               by: Artist 1
//                             </p>
//                             <div className='d-flex align-items-center'>
//                               <select className='custom-select custom-select-xxs w-auto'>
//                                 <option value='1'>1</option>
//                                 <option value='1'>2</option>
//                                 <option value='1'>3</option>
//                               </select>
//                               <a
//                                 className='text-danger ml-auto'
//                                 href='#!'
//                               >
//                                 <i className='fas fa-times'></i> Remove
//                               </a>
//                               <a className='text-muted ml-3' href='#!'>
//                                 <i className='fas fa-plus'></i> Add to
//                                 whishlist
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       </li>
//                       <li className='list-group-item'>
//                         <div className='row align-items-center'>
//                           <div className='col-3'>
//                             <Link to='/product'>
//                               <img
//                                 src='assets/img/klaudia-piaskowska-g55bG1O5Lf0-unsplash.jpg'
//                                 alt='...'
//                                 className='img-fluid'
//                               />
//                             </Link>
//                           </div>
//                           <div className='col'>
//                             <div className='d-flex mb-2 font-weight-bold'>
//                               <a
//                                 className='text-body'
//                                 href='product.html'
//                               >
//                                 Art 2
//                               </a>
//                               <span className='ml-auto'>$49.00</span>
//                             </div>
//                             <p className='mb-3 font-size-sm text-muted'>
//                               by: Artist 2
//                             </p>
//                             <div className='d-flex align-items-center'>
//                               <select className='custom-select custom-select-xxs w-auto'>
//                                 <option value='1'>1</option>
//                                 <option value='1'>2</option>
//                                 <option value='1'>3</option>
//                               </select>
//                               <a
//                                 className='text-danger ml-auto'
//                                 href='#!'
//                               >
//                                 <i className='fas fa-times'></i> Remove
//                               </a>
//                             </div>
//                           </div>
//                         </div>
//                       </li>
//                     </ul>
//                   </div>
//                   <div className='col-12 col-md-5 col-lg-4 offset-lg-1'>
//                     <div className='card mb-7 bg-light'>
//                       <div className='card-body'>
//                         <ul className='list-group list-group-sm list-group-flush-y list-group-flush-x'>
//                           <li className='list-group-item d-flex'>
//                             <span>Subtotal</span>
//                             <span className='ml-auto font-size-sm'>
//                               $89.00
//                             </span>
//                           </li>
//                           <li className='list-group-item d-flex'>
//                             <span>Tax</span>
//                             <span className='ml-auto font-size-sm'>
//                               $00.00
//                             </span>
//                           </li>
//                           <li className='list-group-item d-flex font-size-lg font-weight-bold'>
//                             <span>Total</span>
//                             <span className='ml-auto font-size-sm'>
//                               $89.00
//                             </span>
//                           </li>
//                           <li className='list-group-item font-size-sm text-center text-muted'>
//                             Shipping cost calculated at Checkout *
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <a
//                       className='btn btn-block btn-dark my-4'
//                       href='checkout.html'
//                     >
//                       Proceed to Checkout
//                     </a>
//                     <Link
//                       className='btn btn-link btn-sm px-0 text-body'
//                       href='shop.html'
//                     >
//                       <i className='fas fa-arrow-left mr-2'></i> Continue
//                       Shopping
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </Fragment>
//         );
//       } else {
//         return (
//           <Fragment>
//             <nav className='py-5'>
//               <div className='container'>
//                 <div className='row'>
//                   <div className='col-12'>
//                     <ol className='breadcrumb mb-0 font-size-xs text-muted'>
//                       <li className='breadcrumb-item'>
//                         <Link className='text-muted' to='/'>
//                           Home
//                         </Link>
//                       </li>
//                       <li className='breadcrumb-item active'>
//                         Shopping Cart
//                       </li>
//                     </ol>
//                   </div>
//                 </div>
//               </div>
//             </nav>
//             <section className='pt-4 pb-5'>
//               <div className='container'>
//                 <div className='row'>
//                   <div className='col-12'>
//                     <h3 className='mb-5 text-center'>Shopping Cart</h3>
//                   </div>
//                 </div>
//                 <div className='row'>
//                   <p className='text-uppercase'>
//                     Your Cart is currently empty{" "}
//                   </p>
//                 </div>
//               </div>
//             </section>
//           </Fragment>
//         );
//       }
//     }}
//   </ArtConsumer>
// </Fragment>
