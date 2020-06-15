import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Axios from 'axios';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      selectedPostId: null,
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
    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li>
                <a href='/' title='Home'>
                  Home
                </a>
              </li>
              <li>
                <a href='/new-post' title='New Post'>
                  New Post
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <section className='Posts'>{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
