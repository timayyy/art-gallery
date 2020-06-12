import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";

export class ShopByArtist extends Component {
  render() {
    return (
      <div>
        <section>
          <div className='container'>
            <h4>SHOP BY ARTIST</h4>
            <hr />
            <Tabs defaultActiveKey='all' id='uncontrolled-tab-example'>
              <Tab eventKey='all' title='All Artists'>
                <div className='container'>
                  <div className='row'>
                    <div className=' col-md-3 grid-items border'>
                      <div className='item py-2'>
                        <div className='product p-3'>
                          <Link>
                            <img
                              src='./assets/img/igor-miske-oLhTLD-RBsc-unsplash.jpg'
                              alt=''
                              className='img-fluid'
                            />
                          </Link>
                          <div className='text-center mt-4'>
                            <h6>Artist 1</h6>
                            <span className='p-1 bg-warning text-uppercase'>
                              Featured
                            </span>

                            <div className='price py-2'>
                              <span>N150,000</span>
                            </div>
                            <button
                              type='submit'
                              className='btn btn-outline-dark'
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='col-md-3 grid-items border'>
                      <div className='item py-2'>
                        <div className='product p-3'>
                          <Link>
                            <img
                              src='./assets/img/igor-miske-oLhTLD-RBsc-unsplash.jpg'
                              alt=''
                              className='img-fluid'
                            />
                          </Link>
                          <div className='text-center mt-4'>
                            <h6>Artist 1</h6>
                            <span className='p-1 bg-warning text-uppercase'>
                              Featured
                            </span>

                            <div className='price py-2'>
                              <span>N150,000</span>
                            </div>
                            <button
                              type='submit'
                              className='btn btn-outline-dark'
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-3 grid-items border'>
                      <div className='item py-2'>
                        <div className='product p-3'>
                          <Link>
                            <img
                              src='./assets/img/igor-miske-oLhTLD-RBsc-unsplash.jpg'
                              alt=''
                              className='img-fluid'
                            />
                          </Link>
                          <div className='text-center mt-4'>
                            <h6>Artist 1</h6>
                            <span className='p-1 bg-warning text-uppercase'>
                              Featured
                            </span>

                            <div className='price py-2'>
                              <span>N150,000</span>
                            </div>
                            <button
                              type='submit'
                              className='btn btn-outline-dark'
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-3 grid-items border'>
                      <div className='item py-2'>
                        <div className='product p-3'>
                          <Link>
                            <img
                              src='./assets/img/igor-miske-oLhTLD-RBsc-unsplash.jpg'
                              alt=''
                              className='img-fluid'
                            />
                          </Link>
                          <div className='text-center mt-4'>
                            <h6>Artist 1</h6>
                            <span className='p-1 bg-warning text-uppercase'>
                              Featured
                            </span>

                            <div className='price py-2'>
                              <span>N150,000</span>
                            </div>
                            <button
                              type='submit'
                              className='btn btn-outline-dark'
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey='featured' title='Featured Artists'>
                <div className='container'>
                  <div className='row'>
                    <div className=' col-md-3 grid-items border'>
                      <div className='item py-2'>
                        <div className='product p-3'>
                          <Link>
                            <img
                              src='./assets/img/igor-miske-oLhTLD-RBsc-unsplash.jpg'
                              alt=''
                              className='img-fluid'
                            />
                          </Link>
                          <div className='text-center mt-4'>
                            <h6>Artist 1</h6>
                            <span className='p-1 bg-warning text-uppercase'>
                              Featured
                            </span>

                            <div className='price py-2'>
                              <span>N150,000</span>
                            </div>
                            <button
                              type='submit'
                              className='btn btn-outline-dark'
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='col-md-3 grid-items border'>
                      <div className='item py-2'>
                        <div className='product p-3'>
                          <Link>
                            <img
                              src='./assets/img/igor-miske-oLhTLD-RBsc-unsplash.jpg'
                              alt=''
                              className='img-fluid'
                            />
                          </Link>
                          <div className='text-center mt-4'>
                            <h6>Artist 1</h6>
                            <span className='p-1 bg-warning text-uppercase'>
                              Featured
                            </span>

                            <div className='price py-2'>
                              <span>N150,000</span>
                            </div>
                            <button
                              type='submit'
                              className='btn btn-outline-dark'
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-3 grid-items border'>
                      <div className='item py-2'>
                        <div className='product p-3'>
                          <Link>
                            <img
                              src='./assets/img/igor-miske-oLhTLD-RBsc-unsplash.jpg'
                              alt=''
                              className='img-fluid'
                            />
                          </Link>
                          <div className='text-center mt-4'>
                            <h6>Artist 1</h6>
                            <span className='p-1 bg-warning text-uppercase'>
                              Featured
                            </span>

                            <div className='price py-2'>
                              <span>N150,000</span>
                            </div>
                            <button
                              type='submit'
                              className='btn btn-outline-dark'
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-md-3 grid-items border'>
                      <div className='item py-2'>
                        <div className='product p-3'>
                          <Link>
                            <img
                              src='./assets/img/igor-miske-oLhTLD-RBsc-unsplash.jpg'
                              alt=''
                              className='img-fluid'
                            />
                          </Link>
                          <div className='text-center mt-4'>
                            <h6>Artist 1</h6>
                            <span className='p-1 bg-warning text-uppercase'>
                              Featured
                            </span>

                            <div className='price py-2'>
                              <span>N150,000</span>
                            </div>
                            <button
                              type='submit'
                              className='btn btn-outline-dark'
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tab>
            </Tabs>
          </div>
        </section>
      </div>
    );
  }
}

export default ShopByArtist;
