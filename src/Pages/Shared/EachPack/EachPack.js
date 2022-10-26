import React from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./EachPack.css";

const EachPack = ({ pack }) => {
  const { _id, name, speed, description, price, realip, connection, img } =
    pack;
  const { youtube, facebook, bdix, rawInternet } = speed;

  return (
    <Card className="custom_card" style={{ width: "18rem" }}>
      <Card.Img variant="top" style={{ height: "200px" }} src={img} />
      <Card.Body>
        <Card.Title className="mt-3">{name}</Card.Title>
        <Table responsive>
          <thead>
            <tr>
              <td></td>
            </tr>
            <tr>
              <th>RAW - {rawInternet}mbps</th>
            </tr>
            <tr>
              <td>Youtube - {youtube}mbps</td>
            </tr>
            <tr>
              <td>Facebook - {facebook}mbps</td>
            </tr>
            <tr>
              <td>BDIX - {bdix}mbps</td>
            </tr>
            <tr>
              <td>Real IP - {realip}</td>
            </tr>
            <tr>
              <td>Connection - {connection}</td>
            </tr>
            <tr>
              <th>Price - {price} Taka</th>
            </tr>
          </thead>
        </Table>
        <div className="my-3">
          <Link
            className="seeDetailsButton pkBtn"
            to={`/packagedetails/${_id}`}
          >
            See Details
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EachPack;
