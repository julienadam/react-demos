import React from 'react';
import { withRouter, WithRouterProps } from '../../plumbing/withRouter';

class Bar extends React.Component<WithRouterProps> {

  
  render() {
    return (
     <div>
        name={this.props.params.name};
     </div>
    );
  }
}

export default withRouter(Bar);