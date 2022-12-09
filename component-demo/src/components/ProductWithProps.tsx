import React from 'react';
import styles from './ProductWithProps.module.css';

interface ProductData {
  Price: number
  Url: string
}

// class ProductWithProps extends React.Component<{ Price: number, Url: string}> {
class ProductWithProps extends React.Component<ProductData> {
  render() {
    return (
      <div className={styles.outline}>
        <div><b>Category:</b> <em>Core internal</em></div>
        <div><b>Name:</b> <em>Frameshift Drive</em></div>
        <div><b>Class:</b> <em>5D</em></div>
        <div><b>Cost:</b> <em className={styles.cost}>{this.props.Price}</em>cr</div>
        <div><a href={this.props.Url} className={styles.link}>Details</a></div>
      </div>
    );
  }
}

export default ProductWithProps; 

