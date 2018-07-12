import React, { Component } from 'react';

class Callback extends Component {
  componentDidMount() {
    this.props.processAuth(this.props.setModal);
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default Callback;