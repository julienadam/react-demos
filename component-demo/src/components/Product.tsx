import React from 'react';
import './Product.css';

class Product extends React.Component {

  render() {
    return (
      <div className='Product'>
        <div><b>Category:</b> <em>Core modules</em></div>
        <div><b>Name:</b> <em>Frameshift Drive</em></div>
        <div><b>Class:</b> <em>5D</em></div>
        <div><b>Cost:</b> <em className='Product-cost'>25000</em>cr</div>
      </div>
      );
  }
}

export default Product;