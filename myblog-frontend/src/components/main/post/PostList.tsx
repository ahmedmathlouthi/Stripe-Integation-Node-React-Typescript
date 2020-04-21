import React, { useEffect, useState } from "react";
import { Container, Header, Card, Button, Icon } from "semantic-ui-react";
import { RootState } from "../../../redux";
import { bindActionCreators, Dispatch } from "redux";
import { getPostsAction, getPostsRequest } from "../../../redux/actions/postActions";
import { connect } from "react-redux";
import { PostCard } from "./PostCard";
import { AddPostForm } from "./AddForm";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state: RootState) => ({
  posts: state.posts.posts
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getPostsRequest
    },
    dispatch
);


type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const UnconnectedPostList: React.FC<Props> = ({ getPostsRequest, posts }) => {
  
  const [openAdd, setOpenAdd] = useState(false);
  useEffect(() => {
    if (posts.length == 0) {
      getPostsRequest();
    }
  }, [getPostsRequest, posts]);
  if(openAdd) {
    return <Redirect to="/addPost" />
  }
  return (
    <Container>
      <Button onClick ={e => setOpenAdd(true)}>
        <Icon name="plus" />
        Add Post
      </Button>
      <Header as="h2">Posts</Header>
      <Card.Group>
        {posts.map(post => (
          <PostCard
          key= {post.id}
          post={post} 
          />
        ))}
      </Card.Group>
    </Container>
  );
};

export const PostList = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedPostList);
