import React from "react";
import { connect } from "react-redux";
import { fetchPostsAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }

  render() {
    // 3 - console.log(this.props.posts) <- can return the value here
    // 4 - once the app first bootup, it will always return 2 arrays, because it renders the reducer
    // 5 - the response will send all the values, so only sends the data inside the array
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  // 2 - it will return an object with the posts property
  return { posts: state.posts };
};
// 1 - Everytime the reducer runs, mapStateToProps will be called
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);
