import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const PackageDetails = () => {
  const pack = useLoaderData();

  const { _id, name, speed, description, price, realip, connection, img } =
    pack;
  const { youtube, facebook, bdix, rawInternet } = speed;

  return (
    <div className="w-50 mx-auto">
      <div className="d-flex justify-content-center mb-3">
        <h2 className="text-center ctname">Details of the Package</h2>
        
      </div>
      <Card style={{ width: "22rem" }} className="text-center">
        <Card.Header>{name}</Card.Header>
        <Card.Img
          className="img-fluid"
          variant="top"
          style={{ height: "" }}
          src={img}
        />
        <Card.Body>
          <Card.Title className="mb-3">{name}</Card.Title>
          <Card.Text>
            <span>RAW - {rawInternet}mbps</span>
          </Card.Text>
          <Card.Text>
            <span>Youtube - {youtube}mbps</span>
          </Card.Text>
          <Card.Text>
            <span>Facebook - {facebook}mbps</span>
          </Card.Text>
          <Card.Text>
            <span>BDIX - {bdix}mbps</span>
          </Card.Text>
          <Card.Text>
            <span>Real IP - {realip}</span>
          </Card.Text>
          <Card.Text>
            <span>Connection - {connection}</span>
          </Card.Text>
          <Card.Text>
            <span>Price - {price} Taka</span>
          </Card.Text>
          <Button variant="primary">
            <Link to={`/packagedetails/${_id}`}>See Details</Link>
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default PackageDetails;
<h2>This is Package Details</h2>;
