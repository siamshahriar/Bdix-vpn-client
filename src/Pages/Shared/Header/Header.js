import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";
import "./Header.css";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch } from "antd";

const Header = () => {
  const { user, loading } = useContext(AuthContext);

  const handleLogOut = () => {};
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <img
            src="https://img.favpng.com/8/7/7/virtual-private-network-computer-icons-internet-android-ssl-vpn-png-favpng-AnfSvgQv3Dn86wh5UJ04yWKNF.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
          <span className="ms-2">
            <Link to="/">BDIX VPN</Link>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link>
              <Link to="/">Packages</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link to="/faq">FAQ</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link to="/blog">Blog</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              <Link to="/error">Error</Link>{" "}
            </Nav.Link>
            <Nav.Link>
              {user?.uid ? (
                <>
                  <span>{user?.displayName}</span>
                  <Button variant="light" onClick={handleLogOut}>
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link className="ms-3" to="/register">
                    Register
                  </Link>
                </>
              )}
            </Nav.Link>
            <Nav.Link>
              <Link className="" to="/profile">
                {user?.photoURL ? (
                  <Image
                    style={{ height: "30px" }}
                    roundedCircle
                    src={user?.photoURL}
                  ></Image>
                ) : (
                  <FaUser></FaUser>
                )}
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Switch
                checkedChildren="Dark"
                unCheckedChildren="Light"
                defaultChecked
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
