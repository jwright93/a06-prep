import React from 'react';
import { Link } from 'react-router';

class PostShow extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.params.postId);
  }

  componentWillReceiveProps(nextProps) {
    this.props.fetchPost(nextProps.params.postId);
  }

  render () {
    const post = this.props.post;
    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <Link to="/">Back to Index</Link>
      </div>
    );
  }
}

export default PostShow;
