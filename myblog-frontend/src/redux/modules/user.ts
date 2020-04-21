import { loginAction, logoutAction, loginErrorAction } from "../actions/userActions";

const initialState: UserState = { 
  username: "",
  password: "",
  token: localStorage.getItem("token"), 
  error: null
};



type UserAction = ReturnType<
            typeof loginAction 
            | typeof logoutAction
            | typeof loginErrorAction>;

export function userReducer(
  state = initialState,
  action: UserAction
): UserState {
  switch (action.type) {
    case "user/LOGIN_SUCESS":
      return { ...state, token: action.payload.token};
    case "user/LOGIN_ERROR":
      return { ...state, error: action.payload};
    case "user/LOGOUT":
      return { ...state};
    default:
      return state;
  }
}
