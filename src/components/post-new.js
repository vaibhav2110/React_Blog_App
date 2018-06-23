import React, { Component } from 'react';
import { Field , reduxForm } from 'redux-form';

class PostNew extends Component{
    renderInput(field){
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                    />
                {field.meta.touched ? field.meta.error : ''}
            </div>
        );
    }
    
    onSubmit(values){
        console.log(values);
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
})(PostNew);