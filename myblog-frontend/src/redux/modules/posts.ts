import { typedAction } from "../helpers";
import { Dispatch, AnyAction } from "redux";
import { RootState } from "..";
import { sampleProducts } from "../../data/sampleProducts";
import { getPostDetails,getPostsAction, addPostAction, getPostsFailure, addPostFailure, getPostsRequest } from "../actions/postActions";

const initialState: PostState = { posts: [], loading: false };



// export const loadPosts = () => {
//   return (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
//     setTimeout(() => {
//       response = await getPosts;
//       dispatch(
//         getPostsRequest([...getState().posts]), response])
//       );
//     }, 500);
//   };
// };

type PostAction = ReturnType<
        typeof getPostDetails
        | typeof getPostsRequest
        | typeof getPostsAction 
        | typeof addPostAction 
        | typeof getPostsFailure  
        |  typeof addPostFailure>;

export function postsReducer(
  state = initialState,
  action: PostAction
): PostState {
  switch (action.type) {
    case "posts/GET_POST_DETAILS":
      return { ...state, posts: state.posts.filter(x=> x.id == action.payload)}
    case "posts/GET_POSTS":
      return { ...state, posts: action.payload, loading: true };
    case "posts/ADD_POST":
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            ...action.payload
          }
        ],
        loading: false
      };
    case "posts/GET_POSTS_ERROR":
      return {...state, loading: false};
    case "posts/ADD_POST_ERROR":
      return {...state, loading: false};
    default:
      return state;
  }
}
