import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import BannerCarousel from "./components/hompage/BannerCarousel";
import BestSellers from "./components/hompage/BestSellers";
import NewArrivals from "./components/hompage/NewArrivals";
import WhatWeDo from "./components/hompage/WhatWeDo";
import Modal from "./components/layout/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ShopByArtist from "./components/hompage/ShopByArtist";
import NewsLetter from "./components/hompage/NewsLetter";
import Footer from "./components/layout/Footer";
import ProductDetails from "./components/pages/ProductDetails";
import Cart from "./components/cartPage/Cart";
import { ArtProvider } from "./context";
import ContactUs from "./components/pages/ContactUs";
import Default from "./components/pages/Default";
import Shop from "./components/pages/Shop";
import AboutUs from "./components/pages/AboutUs";

const App = () => {
  return (
    <ArtProvider>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => (
                <Fragment>
                  <BannerCarousel />
                  <WhatWeDo />
                  <BestSellers />
                  <ShopByArtist />
                  <NewArrivals />
                  <NewsLetter />
                </Fragment>
              )}
            />
            <Route
              exact
              path='/product/id'
              render={(props) => (
                <Fragment>
                  <ProductDetails />
                </Fragment>
              )}
            />
            <Route
              exact
              path='/cart'
              render={(props) => (
                <Fragment>
                  <Cart />
                </Fragment>
              )}
            />
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/about-us' component={AboutUs} />

            <Route
              exact
              path='/contact-us'
              render={(props) => (
                <Fragment>
                  <ContactUs />
                </Fragment>
              )}
            />
            <Route component={Default} />
          </Switch>
          <Modal />

          <Footer />
        </div>
      </Router>
    </ArtProvider>
  );
};

export default App;
