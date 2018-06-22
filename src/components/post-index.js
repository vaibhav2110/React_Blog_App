import React, { Component } from 'react';
import { fetchPost } from '../actions';
import { connect } from 'react-redux';
import _ from 'lodash';

class PostIndex extends Component{
    componentDidMount(){
        this.props.fetchPost();
    }
    
    renderPosts(){
        return _.map(this.props.posts, post => {
            return (<li className="list-group-item" key={post.id}>{post.title}</li>);
        })
    }
    
    render(){
        console.log(this.props.posts);
        return (
            <div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPost })(PostIndex);