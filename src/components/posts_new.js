import React, { Component } from 'react';
//helps connect to the redux-form reducer
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  render(){
    return (
      //redux-form still has to work with form inputs
      <form>
        <Field
          //name is what piece of state is the User editing
          name="title"
          //takes in a function, or another component, used to display this field.
          //Field component doesn't know how to show on the screen, it needs
          //this component/function to show the JSX.
          component={this.renderTitleField}
        />
      </form>
    );
  }
}

//reduxForm works just like connect
//however, comes with configuration options
export default reduxForm({
  //has to be unique, so redux-form keeps form/the form's state separate
  form: 'PostsNewForm'
})(PostsNew);
