import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import { FaUser } from "react-icons/fa";
import "./Header.css";
import toast from "react-hot-toast";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Header = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  console.log(user);

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {user?.displayName ? (
        <span>{user?.displayName}</span>
      ) : (
        <span>No Name</span>
      )}
    </Tooltip>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        console.log("sign out successful");
        toast.success("sign out Successful");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="mb-4"
    >
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
                  <Link variant="light" onClick={handleLogOut}>
                    Log out
                  </Link>
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
              <>
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
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
                </OverlayTrigger>
              </>
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
