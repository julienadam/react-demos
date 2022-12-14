import React, { Component } from 'react'

export class AsyncFetchDemo extends Component<{}, { totalReactPackages: 0 }> {
  constructor(props: {}) {
    super(props);

    this.state = {
      totalReactPackages: 0
    };
  }

  render() {
    const { totalReactPackages } = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">Simple GET Request</h5>
        <div className="card-body">
          Total react packages: {totalReactPackages}
        </div>
      </div>
    );
  }

  async componentDidMount() {
    // GET request using fetch with async/await
    const response = await fetch('https://api.npms.io/v2/search?q=react');
    const data = await response.json();
    this.setState({ totalReactPackages: data.total })
  }
}

export default AsyncFetchDemo

