import React, { useEffect, useState } from 'react';
import Loading from "./Loading";
import { Form, Button } from 'react-bootstrap';
import { connect } from "react-redux";
import { actions as loginAction } from "../../actions/LoginAction";

export const HomePresentational = props => {

  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, [mounted, props])

  const handleForm = (e) => {
    switch (e.target.id) {
      case 'email':
        setEmail(e.target.value)
      break;
      case 'password':
        setPassword(e.target.value)
      break;
      default:
    }
  }

  const submit = (e) => {
    e.preventDefault();
    const result = {
      email: email,
      password: password
    }
    props.login(result)
  }

  return (
    <React.Fragment>
        { props.isLoading ? <Loading /> : '' }
        <Form>
            <Form.Group controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter email" value={email} onChange={handleForm} />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={handleForm} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={submit}>
                Submit
            </Button>
        </Form>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.login.isLoading
  };
}

const mapDispatchToProps = dispatch => {
  return {
    login: (data) => dispatch(loginAction.post(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePresentational);