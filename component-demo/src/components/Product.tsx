import React from 'react';
import './Product.css';

class Product extends React.Component {

  render() {
    return (
      <div>
        <div><b>Name:</b> <em>Frameshift Drive</em></div>
        <div><b>Class:</b> <em>5D</em></div>
        <div><b>Cost:</b> <em>25000</em></div>
      </div>
      );
  }
}

export default Product;