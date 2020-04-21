import React, { useState } from "react";
import { Form, Input, Button, Icon, Message, Segment, Radio } from "semantic-ui-react";
import { addPostRequest } from "../../../redux/actions/postActions";
import { connect } from "react-redux";

const mapDispatchToProps = { addPostRequest };

type Props = typeof mapDispatchToProps  ;

const UnconnectedAddForm: React.FC<Props> = ({ addPostRequest }) => {
  let newPost: Post = {
    id: '',
    url: '',
    type: '',
    body: '',
    title: '',
  } ; 
  
  const [state, setState] = useState({
    video: false,
    title: '',
    url: '',
    body: '',
  })
  const [added, setAdded] = useState(false);
  const { video, title, url, body } = state
  
  const onChange = (event: React.FormEvent<HTMLInputElement>): void =>  {
    event.persist();
    const {value, name, className } = event.currentTarget
    if (className.indexOf('checkbox') != -1) {
      setState(prev => ({ ...prev, video: !prev.video }))
    } else {
      setState(prev => ({ ...prev, [name]: value }))
    }

  }
  
  const addPost = (e: React.MouseEvent) => {
    e.preventDefault();
    newPost.title = title;
    newPost.body = body;
    newPost.url = url;
    video ? newPost.type = "video" : newPost.type = "text";
    addPostRequest(newPost);
    setAdded(true);
  };

  return added ? (
    <Message color="green">
      Post Added !
    </Message>
  ) : (
      <Form>
        <Form.Field>
          {/* <Form.Field> */}
            <Segment compact>
              <Radio toggle
                label='Video type'
                name='video'
                checked={video}
                onChange={onChange}
              />
            </Segment>
          {/* </Form.Field> */}
          <Input
            type="text"
            name= "title"
            label="Title"
            value={title}
            onChange={onChange}
            fluid
          />
          {video ?
            <Input
              type="text"
              name = "url"
              label="Video Url"
              value={url}
              onChange={onChange}
              fluid
            /> :
            <Input
              type="text"
              name ="body"
              label="Text content"
              value={body}
              onChange={onChange}
              fluid
            />
          }
        </Form.Field>
        <Button onClick={addPost}>
          <Icon name="plus" />
        Add Post
      </Button>
      </Form>
    );
};

export const AddPostForm = connect(null, mapDispatchToProps)(UnconnectedAddForm);
