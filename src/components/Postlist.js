import React from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <>
        <h1>PostList</h1>
        {this.props.posts.map(post => {
          return ( <>
          <p1>{ post.id  && " " && post.title}</p1>
          <br />
          </>
          );
        })
        }
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPosts })(PostList);
