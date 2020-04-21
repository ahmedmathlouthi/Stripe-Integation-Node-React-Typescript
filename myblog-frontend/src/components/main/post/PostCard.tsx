import React from "react";
import { Card, Image, Button, Embed } from "semantic-ui-react";
import { AddPostForm } from "./AddForm";
import { Redirect, Link } from "react-router-dom";
import { PostDetails } from "./PostDetails";

type Props = {
  post: Post;
};


export const PostCard: React.FC<Props> = ({ post }) => {

  const getId = (url: string) => {
      var video_id = url.split('v=')[1];
      var ampersandPosition = video_id.indexOf('&');
      if(ampersandPosition != -1) {
       return video_id = video_id.substring(0, ampersandPosition);
    }
  }
  
  return (
    <Card>
      { post.type == "video" && 
        <Embed 
        active = {true}
        id = {getId(post.url)}
        source = "youtube"
        />
      
      }
      <Card.Content>
        <Card.Header>{post.title}</Card.Header>
        {post.type == "text" && <Card.Description>{post.body}</Card.Description> }
      </Card.Content>
     
      <Card.Content extra>
      <Button> 
        <Link to={{
          pathname:`/${post.id}`,
          state: {post}
          }} >
        Details  
        </Link>
      </Button>  
      {/* <PostDetails post={post} /> */}
     
        {/* <AddPostForm post={post} /> */}
      </Card.Content>
    </Card>
  );
};
