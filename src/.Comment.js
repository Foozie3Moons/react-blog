import React, { Component } from 'react';

class Comment extends Component {
  render() {
    return (
      <div className='Post'>
        <p>{this.props.body[0]}</p>
        <p>{this.props.body[1]}</p>
        <p>{this.props.body[2]}</p>
        <p>{this.props.body[3]}</p>
      </div>
    );
  }
}

export default Comment;
