import React, { Component } from 'react';
import './App.css';

class Post extends Component {
  render() {
    const {title, body, comments, author} = this.props
    const jsxComments = comments.map((comment, index) => {
      return <p key={index}>{comment}</p>
    })
    return (
      <div className='Post'>
        <h1>{title}</h1>
        <h5>by {author}</h5>
        <h2>{body}</h2>
        <h3>Comments:</h3>
        <p>{comments[0]}</p>
        <p>{comments[1]}</p>
        <p>{comments[2]}</p>
      </div>
    );
  }
}

export default Post;
