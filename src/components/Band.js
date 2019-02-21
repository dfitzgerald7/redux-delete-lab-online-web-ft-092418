import React, { Component } from 'react';

class Band extends Component {

  handleClick = event => {
    this.props.delete(this.props.id)
  }

  render() {
    return(
      <li>
        <button onClick={this.handleClick}>{this.props.name} </button>
      </li>
    );
  }
};

export default Band;
