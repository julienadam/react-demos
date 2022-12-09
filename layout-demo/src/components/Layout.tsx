import React from 'react';

interface Props {
  header: React.ReactNode
  footer: React.ReactNode
  main : React.ReactNode
}

class Layout extends React.Component<Props> {
  public render() {
    return (<div>
      <h2>Header</h2>
      <div>{this.props.header}</div>
      <h2>Contenu principal</h2>
      <div>{this.props.main}</div>
      <hr/>
      <div>{this.props.footer}</div>
    </div>)
  }
}

export default Layout;
