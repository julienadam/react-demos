import React from 'react';
import styles from './MouseOverHello.module.css'

class MouseOverHello extends React.Component {

  handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.add(styles.off);
  }

  public render() {
    return (
      <div onMouseEnter={this.handleMouseEnter}>
        Hello !
      </div>
    );
  }
}

export default MouseOverHello;