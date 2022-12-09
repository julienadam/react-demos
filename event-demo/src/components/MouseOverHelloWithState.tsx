import React from 'react';
import styles from './MouseOverHelloWithState.module.css'

interface HelloState {
  clicks : number
  isToggled : boolean
}

class MouseOverHelloWithState extends React.Component<{ Greeting: string, Increment: number }, HelloState> {

  constructor(props: any) {
    super(props)
    this.state = { clicks: 0, isToggled: false }
  }

  handleMouseEnterOrLeave = () => {
    this.setState({ clicks : this.state.clicks, isToggled : !this.state.isToggled})
  }

  // handleClick = () => {
  //   this.setState({ clicks: this.props.Increment + this.state.clicks + 1, isToggled: this.state.isToggled })
  // }

  handleClick = () => {
    this.setState((state, props) => ({ clicks: props.Increment + state.clicks}))
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