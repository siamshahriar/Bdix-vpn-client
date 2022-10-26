import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { FaGoogle, FaGithub } from "react-icons/fa";
import toast from "react-hot-toast";
import "./Registration.css";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    console.log(name, email, photoURL, password);

    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setError("");
        toast.success("Registration Successful");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        setError(errorCode.substring(5));
        const errorMessage = error.message;
        toast.error(errorCode.substring(5));
        // ..
      });
  };
  return (
    <div className="container fullCon">
      <div className="regContainer">
        <Form onSubmit={handleSubmit} className="mx-auto regForm">
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
          <Form.Group className="mb-3 d-flex justify-content-center">
            <button className="btn2" variant="primary" type="submit">
              Register
            </button>
          </Form.Group>

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
