import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "./redux";
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import createSagaMiddleware from 'redux-saga';
import { postsSaga } from "./redux/sagas/Posts";
import { productSaga } from "./redux/sagas/Products";
import { loginSaga } from "./redux/sagas/Auth";
// Saga Middleware
const sagaMiddleware = createSagaMiddleware();


const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(postsSaga);
sagaMiddleware.run(loginSaga);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
