import React from 'react';
import styles from './Price.module.css';

class Price extends React.Component<{Price: number}> {
  render() {
    return (
      <span><em className={styles.cost}>{this.props.Price}</em><span>cr</span></span>
    );
  }
}

export default Price;



