import React, { useState } from "react";
import { RootState } from "../../../redux";
import { loginAction, loginRequest } from "../../../redux/actions/userActions";
import { connect } from "react-redux";
import { Form, Input, Header, Button, Container } from "semantic-ui-react";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state: RootState) => ({
  user: state.user
});

const mapDispatchToProps = { loginRequest };

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const UnconnectedLogin: React.FC<Props> = ({ loginRequest, user }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  user.username = username;
  user.password = password;
  const tryLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    loginRequest(user);
  };

  // if (user !== null) {
  //   return <Redirect to="/shop" />;
  // }

  return (
    <Container>
      <Header as="h2">Login</Header>
      <Form>
        <Form.Field>
          <Input
            label="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <Input 
          type = "password"
          label="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          />
        </Form.Field>
        <Button onClick={tryLogin}>Login</Button>
      </Form>
    </Container>
  );
};

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedLogin);
