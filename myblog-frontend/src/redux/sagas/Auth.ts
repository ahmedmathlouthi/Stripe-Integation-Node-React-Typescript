import { call, put, takeLatest, all } from 'redux-saga/effects';

import { loginApi } from "../../api/api";
import { loginAction, loginErrorAction, loginRequest } from '../actions/userActions';




export function* loginUser({payload} : ReturnType<typeof loginRequest>) {
    try {
      const response = yield call(loginApi,payload);
      const token = response.data.token;
      localStorage.setItem('token', token);
      yield put(loginAction(payload));
    } catch(e) {
      yield put(loginErrorAction("login error"));
    }
  }

export function* loginSaga() {
  yield takeLatest("user/LOGIN_REQUEST", loginUser);
}