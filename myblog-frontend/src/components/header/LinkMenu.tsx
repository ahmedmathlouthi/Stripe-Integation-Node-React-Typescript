import React from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import { RootState } from "../../redux";
import { numberOfItems } from "../../helpers/numberOfItems";
import { connect } from "react-redux";
import { logoutAction } from "../../redux/actions/userActions";

const mapStateToProps = (state: RootState) => ({
  username: state.user.username,
  numberOfItems: numberOfItems(state)
});

const mapDispatchToProps = { logoutAction };

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;
const logout = () => {
  logoutAction();
  return <Redirect to="/login" />
}
const UnconnectedLinkMenu: React.FC<Props> = ({
  logoutAction,
  numberOfItems,
  username
}) => {
  return (
    <Menu>
      <Menu.Menu position="right">
        <Menu.Item name="postList">
          <Link to="/postList">PostList </Link>
        </Menu.Item>
        <Menu.Item name="shop">
          <Link to="/shop">Shop</Link>
        </Menu.Item>
        <Menu.Item name="cart">
          <Link to="/cart">Cart ({numberOfItems})</Link>
        </Menu.Item>
        {username === null ? (
          <Menu.Item name="login">
            <Link to="/login">Login</Link>
          </Menu.Item>
        ) : (
          <Dropdown item text={username}>
            <Dropdown.Menu>
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </Menu.Menu>
    </Menu>
  );
};

export const LinkMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedLinkMenu);
