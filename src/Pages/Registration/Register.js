import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { FaGoogle, FaGithub } from "react-icons/fa";
import "./Registration.css";

const Register = () => {
  return (
    <div className="container fullCon">
      <div className="regContainer">
        <Form className="mx-auto regForm">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <p className="loginHeading">Registration</p>
            <Form.Label className="emailName">Full Name</Form.Label>
            <Form.Control
              className="iputField"
              type="text"
              name="name"
              placeholder="Enter full name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="emailName">Photo URL</Form.Label>
            <Form.Control
              className="iputField"
              type="text"
              name="photoURL"
              placeholder="Enter photo URL"
            />
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
            <span class="text">Register</span>
          </Link>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <p className="emailName regWith text-center mt-3">
              or Register with
            </p>
            <div className="iconsgg">
              <FaGoogle className=" loginIcon"></FaGoogle>
              <FaGithub className=" loginIcon"></FaGithub>
            </div>
            <p className="emailName regWith text-center mt-3">
              Already have an account? Login
              <Link className="ms-1" to="/login">
                Here
              </Link>{" "}
            </p>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Register;
