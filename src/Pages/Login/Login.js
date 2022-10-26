import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div className="container fullCon">
      <div className="regContainer">
        <Form className="mx-auto regForm">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <p className="loginHeading">Login</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="emailName">Email address</Form.Label>
            <Form.Control
              className="iputField"
              type="email"
              name="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="emailName">Password</Form.Label>
            <Form.Control
              className="iputField"
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              className="emailName"
              label="Accept Terms & Conditions"
            />
          </Form.Group>
          <Link className="btnSubmit" variant="primary" type="submit">
            <span class="text text-center">Login</span>
          </Link>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <p className="emailName regWith text-center mt-3">or Login with</p>
            <div className="iconsgg">
              <FaGoogle className=" loginIcon"></FaGoogle>
              <FaGithub className=" loginIcon"></FaGithub>
            </div>
            <p className="emailName regWith text-center mt-3">
              Don't have an account yet? Register
              <Link to="/register"> Here</Link>{" "}
            </p>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Login;
