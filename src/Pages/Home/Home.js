import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";

const Home = () => {
  return (
    <div>
      <Container>
        <Row className="">
          <Col lg="3" className="">
            <LeftSideNav></LeftSideNav>
          </Col>
          <Col lg="9">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
