import React, { Component } from "react";

export class Default extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className='row'>
          <div className='mx-auto text-center text-uppercase'>
            <h1>404</h1>
            <h1>error</h1>
            <h1>page not found</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Default;
