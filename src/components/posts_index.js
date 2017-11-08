import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {
  componentDidMount(){
    //props from the universal redux, and immediately call the action creator
    this.props.fetchPosts();
  }

  renderPosts(){
    //lodash map takes care of object mapping
    this.props.posts
  }

  render(){
    return (
      <div>
        <h3> PostsIndex </h3>
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
