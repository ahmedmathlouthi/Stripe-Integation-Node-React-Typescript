import { call, put, takeEvery, all, takeLatest } from 'redux-saga/effects';
import { setProducts, loadProducts, setProductsFailure, requestProducts } from "../actions/productActions";
import { sampleProducts } from "../../data/sampleProducts";

export function* getProductsSaga(): any {
    try {
      const products = {...sampleProducts};
      yield put(setProducts(products));
    } catch(e) {
      yield put(setProductsFailure());
    }
}

export function* productSaga() {
    yield all([
      takeLatest("products/SET_PRODUCTS_REQUEST", getProductsSaga)
    ]);
  }