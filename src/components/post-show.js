import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOnePost } from '../actions';
import { deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostShow extends Component{
    componentDidMount(){
        const { id } = this.props.match.params;
        this.props.fetchOnePost(id);
    }
    
    deleteThisPost(){
        const { id } = this.props.match.params;
        this.props.deletePost(id, ()=>{
            this.props.history.push('/');
        })
    }
    
    render(){
        const { post } = this.props;
        
        if(!post){
            return <div>Loading...</div>
        }
        
        return (<div>
                    <Link to="/">Back to Index</Link>
                    <button onClick={this.deleteThisPost.bind(this)} className="btn btn-danger pull-xs-right" >Delete Post</button>
                    <h3>{post.title}</h3>
                    <h5>Categories: {post.category}</h5>
                    <p>Content: {post.content}</p>
                </div>);
    }
    
}

function mapStateToProps({ posts } , ownProps){
    return { post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchOnePost, deletePost})(PostShow);