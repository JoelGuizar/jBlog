import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { Link } from 'react-router-dom';

class PostsShow extends Component {
  componentDidMount(){
    //below is provided by react router
    //match is the top level property, and the
    //params is all the tokens that live inside the index.js such as :id
    //it can be /posts/:id or /posts/:id/:components
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render(){
    const {post} = this.props;

    if (!post) {
      return <div> Loading... </div>
    }

    return (
      <div>
        <Link to="/" className="btn btn-primary"> Home </Link>
        <h3> {post.title} </h3>
        <h6> Categories: {post.categories} </h6>
        <p> {post.content} </p>
      </div>
    )
  }
}

//gets state from app-state to component-state
// we only care about the posts
// the second argument = is the props object that is going to 'this' component
// by convention we call it OwnProps
// we use mapStateToProps not only to grab the app state,
//but to do specific calculations like this
function mapStateToProps({ posts }, ownProps) {
  //now the component will only receive THIS particular post
  return { post: posts[ownProps.match.params] }
}

export default connect(null, { fetchPost })(PostsShow);
