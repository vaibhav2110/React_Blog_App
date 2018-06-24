import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOnePost } from '../actions';

class PostShow extends Component{
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchOnePost(id);
    }
    
    render(){
        const { post } = this.props;
        console.log(post);
        
        if(!post){
            return <div>Loading...</div>
        }
        
        return (<div>
                    <h3>{post.title}</h3>
                    <h5>Categories: {post.category}</h5>
                    <p>Content: {post.content}</p>
                </div>);
    }
    
}

function mapStateToProps({ posts } , ownProps){
    return { post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchOnePost})(PostShow);