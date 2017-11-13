import React, { Component } from 'react';
//helps connect to the redux-form reducer
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

class PostsNew extends Component {

  //by convention, use field as the argument -- field contains some event handlers
  renderField(field){
    //destructuring meta of field, and the touched, error properties of meta
    const { meta: {touched, error} } = field;
    //same as field.meta.touch, field.meta.error
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      //styling for this also goes here.
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
        //an object which contains a bunch of event handlers/props like onChange etc..
          {...field.input}
        //meta.error is automatically added from our validate object,
        //it'll match the name, with the key of the errors object from validation
        //comes with 3 states: pristine, touched, invalid
        //here, we will show the error if field.meta.touched state is true
        />
        <div className="tagtag">
        {field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    )
  }

  //values = complete list of Field input submitted
  //still need to connect to redux, and make a action/reducer for createPost
  onSubmit(values){
    //since, router is passing down its own props, as defined in <Route>
    //it always passes down Router props, such as history.
    this.props.createPost(values, () => {
      //cb as 2nd argument, as in action creator
      this.props.history.push('/')
    });
  }

  render(){
    //pulls from redux-form
    const { handleSubmit } = this.props;
    return (
      //redux-form still has to work with form inputs
      //handleSubmit from reduxForm, if everything ok, then uses our onSubmit
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          //prop for dynamic label
          label="Title"
          //name is what piece of state is the User editing
          name="title"
          //takes in a function, or another component, used to display this field.
          //Field component doesn't know how to show on the screen, it needs
          //this component/function to show the JSX.
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      <Link to="/" className="btn btn-danger"> Cancel </Link>
      </form>
    );
  }
}

//reduxForm has built-in validation
//this helper function will be passed as configuration to reduxForm
//this will be called during different parts of the life cycle
//values come in as an argument, and is an object, made from whatever the user put
//into the form.
function validate(values){
  //if errors has *any* properties, redux-form will not submit the form.
  const errors = {}

  //if no title passed by User, then assign it to errors object
  if (!values.title || values.title.length < 3) {
    errors.title = "Enter a title";
  }
  if (!values.categories) {
    errors.categories = "Enter a category";
  }
  if (!values.content) {
    errors.content = "Enter content";
  }
  return errors;
}

//reduxForm works just like connect
//however, comes with configuration options
export default reduxForm({
  //has to be unique, so redux-form keeps form/the form's state separate
  //from other forms that may be on the page
  form: 'PostsNewForm',
  validate
})(
  connect(null,{createPost})(PostsNew)
);
