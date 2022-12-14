import React, { Component } from 'react'

type PostId = { postId: number }

const initialState = {
  postId: 0
};

export class FetchWithPostDemo extends Component<{}, PostId> {
  constructor(props: {}) {
    super(props);

    this.state = initialState as PostId;
  }

  render() {
    return (
      <div>
        <h5>POST with fixed data</h5>
        <div>
          Post id: {this.state.postId}
        </div>
      </div>
      );
  }

  componentDidMount() {
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('https://reqres.in/api/posts', requestOptions)
      .then(response => response.json())
      .then(data => this.setState({ postId: data.id }));
  }
}

export default FetchWithPostDemo