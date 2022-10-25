import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import EachPack from "../EachPack/EachPack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./PackageContainer.css";

const PackagesContainer = () => {
  const catagoryPacks = useLoaderData();
  // console.log(catagoryPacks);

  const [categories, setCategories] = useState([]);
  // console.log(categories);

  useEffect(() => {
    fetch("http://localhost:5000/vpn-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const catagoryName = categories.find(
    (each) => each.id === catagoryPacks[0].category_id
  );

  // console.log(catagoryName);

  return (
    <div>
      <Container className="mt-4">
        <div className="d-flex justify-content-center mb-3">
          <h2 className="text-center ctname">{catagoryName?.name}</h2>
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

export default PackagesContainer;
