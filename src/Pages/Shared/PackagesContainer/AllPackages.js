import React from "react";
import { useLoaderData } from "react-router-dom";
import EachPack from "../EachPack/EachPack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AllPackages = () => {
  const catagoryPacks = useLoaderData();
  return (
    <div>
      <Container className="mt-3">
        <div className="d-flex justify-content-center mb-3">
          <h2 className="text-center ctname">All the packages</h2>
        </div>
        <Row className="text-center">
          {catagoryPacks.map((pack) => (
            <Col
              lg="4"
              md="6"
              className="mb-5 text-center d-flex justify-content-center"
            >
              <EachPack key={pack._id} pack={pack}></EachPack>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllPackages;
