import React, { Component } from "react";
import { Nav } from "./components/header/Nav";
import { Container } from "semantic-ui-react";
import { Switch, Route, Redirect, RouteProps, RouteComponentProps, withRouter } from "react-router-dom";
import { Shop } from "./components/main/shop/Shop";
import { Cart } from "./components/main/cart/Cart";
import { Login } from "./components/main/auth/Login";
import { PostList } from "./components/main/post/PostList";
import { RootState } from "./redux";
import { connect } from "react-redux";
import { PostDetails } from "./components/main/post/PostDetails";
import { AddPostForm } from "./components/main/post/AddForm";


// const mapStateToProps = (state: RootState) => ({
//   token: state.user.token
// });

// type ownProps = ReturnType<typeof mapStateToProps>  ;
export function authenticatedPage (Component: React.FC, ) {
  const componentName = Component.displayName || Component.name || 'Component'

  return class extends React.Component {
    static displayName = `Route(${componentName})`

    renderPage () {
      return (
        <Component {...this.props} />
      )
    }

    render () {
      const token = localStorage.getItem('token');
      if (token) {
        return this.renderPage()
      } else {
        return <Redirect to='/login' />
      }
    }
  }
}

const App: React.FC= ({}) => {
  return (
    <Container>
      <Nav />
      <Switch>
        <Route path="/" exact>
          Home
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/postList" component={PostList} />
        <Route path="/shop" component={Shop} />
        <Route path="/cart" component={Cart} />
        <Route exact path='/addPost' component={authenticatedPage(AddPostForm)} />
        <Route path="/:id" component={PostDetails} />
      </Switch>
    </Container>
  );
};





export default connect()(App);
