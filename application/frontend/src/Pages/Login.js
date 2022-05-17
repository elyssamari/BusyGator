import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../services/userService';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState();

  /**  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []); **/

  // logout the user
  const handleLogout = () => {
    setUser({});
    setEmail('');
    setPassword('');
    localStorage.clear();
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const user = { email, password };
    // send the username and password to the serve
    // set the state of the user
    const response = axios
      .post('http://localhost:3000/Login', user)
      .then((response) => {
        if (response) {
          setUser(response.data);
          window.alert('Your login is success!');
        }
      });
    const getAllUsers = axios.get('/user');

    // store the user in localStorage
    localStorage.setItem('user', JSON.stringify(response.data));
  };

  if (user) {
    return (
      <div>
        {user.name} is loggged in
        <button onClick={handleLogout}>logout</button>
      </div>
    );
  }

  return (
    <>
      <Card id="login_signupcard" className="card-center">
        <Card.Header className="text-center">
          <h1>Login</h1>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-right">
            All fields with an asterick (*) are mandatory
          </Card.Text>
          <Form onSubmit={onFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                value={email}
                placeholder="enter a username"
                onChange={({ target }) => setEmail(target.value)}
                type="text"
                className="form-control"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password *</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                aria-label="Password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
            </Form.Group>

            <Link to="/ForgetPassword">Forgot Password?</Link>

            <Form.Group className="text-center">
              <Button id="login_signin_button" variant="primary" type="submit">
                Login
              </Button>
            </Form.Group>
          </Form>
          <Card.Text id="login_signup_text" className="text-center">
            Already Have an account?
            <span className="space"></span>
            <Link to="/Signup">sign up Here</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Login;
