import React, { Component } from 'react';
import Axios from 'axios';
import Post from '../../../components/Post/Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    Axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      const posts = response.data.slice(0, 4);
      const updqtedPosts = posts.map((post) => {
        return {
          ...post,
          author: 'Max',
        };
      });
      this.setState({
        posts: [...updqtedPosts],
      });
    });
  }

  postSelectedHandler = (id) => {
    this.setState({
      selectedPostId: id,
    });
  };

  render() {
    const posts = this.state.posts.map((post) => {
      return <Post clicked={this.postSelectedHandler.bind(this, post.id)} key={post.id} title={post.title} author={post.author} />;
    });
    return <section className='Posts'>{posts}</section>;
  }
}

export default Posts;
