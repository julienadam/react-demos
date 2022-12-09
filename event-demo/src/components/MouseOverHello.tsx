import React from 'react';
import styles from './MouseOverHello.module.css'

class MouseOverHello extends React.Component {

  handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.add(styles.off);
  }

  handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove(styles.off);
  }

  handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.add(styles.big);
  }

  public render() {
    return (
      <div onClick={this.handleClick} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        Hello !
      </div>
    );
  }
}

export default MouseOverHello;