import { typedAction } from "../helpers";

export const loginAction = (user: UserState) => {
    return typedAction("user/LOGIN_SUCESS", user);
};
export const loginErrorAction = (error: string) => {
    return typedAction("user/LOGIN_ERROR", error);
}
export const logoutAction = () => {
    localStorage.removeItem("token");
    return typedAction("user/LOGOUT");
};
export const loginRequest = (user: UserState) => {
    return typedAction("user/LOGIN_REQUEST", user);
};