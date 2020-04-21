import { combineReducers } from "redux";
import { userReducer } from "./modules/user";
import { productsReducer } from "./modules/products";
import { postsReducer } from "./modules/posts";

export const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  posts: postsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
