import React from 'react';
import Price from './Price';
import styles from './ProductWithNestedProps.module.css';

interface ProductData {
  Price: number
  Url: string
}

class ProductWithNestedProps extends React.Component<ProductData> {
  render() {
    return (
      <div className={styles.outline}>
        <div><b>Category:</b> <em>Core internal</em></div>
        <div><b>Name:</b> <em>Frameshift Drive</em></div>
        <div><b>Class:</b> <em>5D</em></div>
        <div><b>Cost:</b> <Price Price={this.props.Price}/></div>
        <div><a href={this.props.Url} className={styles.link}>Details</a></div>
      </div>
    );
  }
}

export default ProductWithNestedProps; 

