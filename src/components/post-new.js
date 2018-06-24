import React, { Component } from 'react';
import { Field , reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostNew extends Component{
    renderInput(field){
        
        const { meta: {touched , error} } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;
        
        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                    />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        );
    }
    
    onSubmit(values){
        this.props.createPost(values, ()=>{
            
            console.log('pushed');
            this.props.history.push('/');
            
        });
    }
    
    render(){
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field 
                    label="Title"
                    name="title"
                    component={this.renderInput}
                    />
                <Field 
                    label="Categories"
                    name="categories"
                    component={this.renderInput}
                    />
                <Field 
                    label="Content"
                    name="content"
                    component={this.renderInput}
                    />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
            
        );
    }
}

function validate(values){
    let error = {};
    
    if(!values.title){
        error.title = 'Enter a Title';
    }
    if(!values.categories){
        error.categories = 'Enter Category';
    }
    if(!values.content){
        error.content = 'Enter some content';
    }
    
    return error;
}

export default reduxForm({
    validate,
    form: 'postNewForm'
})(
    connect(null, {createPost})(PostNew)
);