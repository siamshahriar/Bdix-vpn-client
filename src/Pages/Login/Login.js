import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { signIn, setLoading } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log("login successful");
        form.reset();
        setError("");
        toast.success("Login Successful");
        navigate(from, { replace: true });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
        toast.error(errorCode.substring(5));
        setError(errorCode.substring(5));
        const errorMessage = error.message;
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="container fullCon">
      <div className="regContainer">
        <Form onSubmit={handleLogIn} className="mx-auto regForm">
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
              label="Remmember Password"
            />
          </Form.Group>
          <Form.Group className="mb-3 d-flex justify-content-center">
            <button className="btn2" variant="primary" type="submit">
              Login
            </button>
          </Form.Group>
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
