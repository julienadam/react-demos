import React from 'react';

interface State {
  clicks: number
}

class LifeCycleDemo extends React.Component<{}, State> {

  constructor(props: any) {
    super(props)
    this.state = { clicks: 0 }
  }

  handleClick = () => {
    console.log("handleClick");
    this.setState((state, _) => ({ clicks: 1 + state.clicks }))
  }

  public render() {
    console.log("render");
    return (
      <div onClick={this.handleClick}>
        Click me to see the lifecycle logs !
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps: {}, nextState: State) {
    console.log("shouldComponentUpdate nextState is " + nextState.clicks);
    return true;
  }

  static getDerivedStateFromProps(props: {}, state : State) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  getSnapshotBeforeUpdate(prevProps: {}, prevState: State) {
    console.log("getSnapshotBeforeUpdate prevState was " + prevState.clicks);
    return 42;
  }

  componentDidUpdate(prevProps: {}, prevState: State, snapshot: any) {
    console.log("componentDidUpdate prevState was " + prevState.clicks + " snapshot was " + snapshot);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

export default LifeCycleDemo;
