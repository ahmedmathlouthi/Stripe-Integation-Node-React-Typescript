import { typedAction } from "../helpers";


export const getPostsRequest = () => {
    return typedAction("posts/GET_POSTS_REQUEST");
}  
export const addPostAction = (post: Post) => {
    return typedAction("posts/ADD_POST", post);
};
export const getPostsAction = (posts: Post[]) => {
      return typedAction("posts/GET_POSTS", posts);
};
export const getPostsFailure = () => {
    return typedAction("posts/GET_POSTS_ERROR");
};
export const addPostFailure = (error: string) => {
    return typedAction("posts/ADD_POST_ERROR", error);
};
export const addPostRequest = (post: Post) => {
    return typedAction("posts/ADD_POST_REQUEST", post);
}
export const getPostDetails = (id: string) => {
    return typedAction("posts/GET_POST_DETAILS", id);
}
export const getPostDetailsRequest = (id: string) => {
    return typedAction("posts/GET_POST_DETAILS_REQUEST", id);
}
export const getPostDetailsFailure = (error: string) => {
    return typedAction("posts/GET_POST_DETAILS_ERROR", error);
};
