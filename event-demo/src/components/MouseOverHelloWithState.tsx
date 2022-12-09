import React from 'react';
import styles from './MouseOverHelloWithState.module.css'

interface HelloState {
  clicks : number
  isToggled : boolean
}

class MouseOverHelloWithState extends React.Component<{ Greeting: string }, HelloState> {

  constructor(props: any){
    super(props)
    this.state = { clicks: 0, isToggled: false }
  }

  handleMouseEnterOrLeave = (_: React.MouseEvent<HTMLDivElement>) => {
    this.setState({ clicks : this.state.clicks, isToggled : !this.state.isToggled})
  }

  handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    this.setState({ clicks: this.state.clicks + 1, isToggled: this.state.isToggled })
  }

  public render() {
    return (
      <div onClick={this.handleClick} onMouseEnter={this.handleMouseEnterOrLeave} onMouseLeave={this.handleMouseEnterOrLeave} className={this.state.isToggled ? styles.on : styles.off}>
        {this.props.Greeting} ({this.state.clicks} Clicks)
      </div>
    );
  }
}

export default MouseOverHelloWithState;