import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const EachPack = ({ pack }) => {
  const { _id, name, speed, description, price, realip, connection, img } =
    pack;
  const { youtube, facebook, bdix, rawInternet } = speed;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" style={{ height: "286px" }} src={img} />
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
    </Card>
  );
};

export default EachPack;
