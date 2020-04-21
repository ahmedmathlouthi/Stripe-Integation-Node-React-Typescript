import { call, put, takeEvery, all, takeLatest } from 'redux-saga/effects';

import {
  addPostApi,
  getPostsApi,
} from '../../api/api';

import {
  addPostAction,
  addPostFailure,
  getPostsAction,
  getPostsFailure,
  addPostRequest,
  getPostDetails,
  getPostDetailsFailure
} from '../actions/postActions';


export function* getPostsSaga(): any{
  try {
    const response = yield call(getPostsApi);
    const posts = response.data;
    yield put(getPostsAction(posts));
  } catch(e) {
    yield put(getPostsFailure());
  }
}

export function* addPostSaga(action: ReturnType<typeof addPostRequest>) : any {
  try {
 
    yield call(addPostApi, action.payload);
    yield put(addPostAction(action.payload));
  } catch(e) {
    yield put(addPostFailure(e));
  }
};

export function* getPostDetailSaga(action: any) : any {
  try {
     yield put(getPostDetails(action.id));
  } catch(e) {
    yield put(getPostDetailsFailure(e));
  }
};


export function* postsSaga() {
  yield all([
    takeEvery("posts/GET_POSTS_REQUEST", getPostsSaga),
    takeLatest("posts/ADD_POST_REQUEST", addPostSaga),
    takeEvery("posts/GET_POST_DETAILS_REQUEST", getPostDetailSaga)
  ]);
}