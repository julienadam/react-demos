import React from 'react';
import Price from './Price';
import styles from './ProductWithNestedProps.module.css';

export interface ProductData {
  Category: string
  Name: string
  Price: number
  Url: string
  ModuleClass: string
}

class ProductWithNestedProps extends React.Component<ProductData> {
  render() {
    return (
      <div className={styles.outline}>
        <div><b>Category:</b> <em>{this.props.Category}</em></div>
        <div><b>Name:</b> <em>{this.props.Name}</em></div>
        <div><b>Class:</b> <em>{this.props.ModuleClass}</em></div>
        <div><b>Cost:</b> <Price Price={this.props.Price}/></div>
        <div><a href={this.props.Url} className={styles.link}>Details</a></div>
      </div>
    );
  }
}

export default ProductWithNestedProps;
