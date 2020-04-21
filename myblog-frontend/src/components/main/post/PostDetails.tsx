import React, { useEffect } from "react";
import { Card, Image, Button, Container, Embed } from "semantic-ui-react";
import { Redirect, RouteComponentProps } from "react-router-dom";
import { RootState } from "../../../redux";
import { connect, useSelector, useDispatch } from "react-redux";
import { createSelector } from "reselect";


interface DetailProps extends RouteComponentProps<{ id: string }> {
    // other properties
}


export const PostDetails: React.FC<DetailProps> = (props) => {
    const getId = (url: string) => {
        var video_id = url.split('v=')[1];
        var ampersandPosition = video_id.indexOf('&');
        if(ampersandPosition != -1) {
         return video_id = video_id.substring(0, ampersandPosition);
      }
    }
    const id = props.match.params.id;

    const postsSelectors = (state: RootState) => state.posts.posts;
    const getPosts = createSelector(
        postsSelectors,
        (posts) => posts.filter(x => { return x.id == id })
    );
    const Item = useSelector(getPosts);

    return (
        <Container>
            Details:
            {Item.map(p => (
                <Container>
                    <h2>{p.title}</h2>
                    {/* <h3>{x.body}</h3> */}
                    {p.type == "video" &&
                        <Embed
                            active={true}
                            id={getId(p.url)}
                            source="youtube"
                        />

                    }
                </Container>

            ))}
        </Container>
    );
};
