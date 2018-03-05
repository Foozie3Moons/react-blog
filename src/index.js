import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './Post';
import registerServiceWorker from './registerServiceWorker';

const post = {
  title: "Dinosaurs are STUPID",
  author: "Stealthy Stegosaurus",
  body: "DON'T @ ME",
  comments: ["First!", "Great post", "Hire this author now!"]
}

ReactDOM.render(
  <Post
    title={post.title}
    author={post.author}
    body={post.body}
    comments={post.comments}
  />,
  document.getElementById('root')
);
registerServiceWorker();
