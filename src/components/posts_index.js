import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class PostsIndex extends Component {
  componentDidMount(){
    //props from the universal redux, and immediately call the action creator
    this.props.fetchPosts();
  }

  renderPosts(){
    //lodash map takes care of object mapping
    return _.map(this.props.posts, posts => {
      return (
      <li className="list-group-item" key={posts.title}>
        {posts.title}
      </li>)
    })
  }

  render(){
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3> This is your home. </h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state){
  return { posts: state.posts };
}

//mapDispatchToProps still occuring, but putting in the action creator
//like this, it'll be take care of automatically
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
