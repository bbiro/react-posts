import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import './Blog.css';

class Blog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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
        <Route path='/' exact render={() => <h1>Home</h1>} />
        {/* <Posts /> */}
        {/* <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section> */}
      </div>
    );
  }
}

export default Blog;
