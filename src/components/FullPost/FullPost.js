import React, { Component } from 'react';
import Axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedPost: null,
    };
  }

  componentDidUpdate() {
    console.log('[FullPost.js] Component did update');
    if (this.props.id) {
      Axios.get('/posts/' + this.props.id).then((response) => {
        console.log(response);
        this.setState({
          loadedPost: response.data,
        });
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.id !== this.props.id;
  }

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if (this.props.id) post = <p style={{ textAlign: 'center' }}>Loading...</p>;
    if (this.state.loadedPost) {
      post = (
        <div className='FullPost'>
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className='Edit'>
            <button className='Delete'>Delete</button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
