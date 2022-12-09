import React from 'react';
import ProductWithNestedProps, { ProductData } from './ProductWithNestedProps';

class ProductList extends React.Component<{ items : Array<ProductData>}> {
  render() {
    var list = this.props.items.map((item) =>
      <ProductWithNestedProps Name={item.Name} Price={item.Price} Url={item.Url} Category={item.Category} ModuleClass={item.ModuleClass} ></ProductWithNestedProps>
    );

    return (
      <div>
        <h1>Products for sale</h1>
        {list}
      </div>
    );
  }
}

export default ProductList;

