import React, { Component } from 'react'

type Error = { __typeName: 'error', errorMessage: string }
type ReactPackagesInfo = { __typeName: 'info', totalReactPackages: number }
type State = Error | ReactPackagesInfo

let initialState = {
  __typeName: "info",
  totalReactPackages: 0
};

export class FetchWithErrorHandling extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = initialState as State;
  }

  render() {
    switch(this.state.__typeName)
    {
      case 'error':
        return (
          <div>
            Error fetching data : {this.state.errorMessage}
          </div>
        );
      case 'info':
        <div>
          <h5>Simple GET Request</h5>
          <div>
            Total react packages: {this.state.totalReactPackages}
          </div>
        </div>
        break;
    }
  }

  componentDidMount() {
    // GET request using fetch with error handling
    fetch('https://api.npms.io/v2/invalid-url')
      .then(async response => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        this.setState({ __typeName: 'info', totalReactPackages: data.total })
      })
      .catch(error => {
        this.setState({ __typeName: 'error', errorMessage: error.toString() });
        console.error('There was an error!', error);
      });
  }
}

export default FetchWithErrorHandling