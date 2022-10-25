import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useLoaderData } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

const Checkout = () => {
  const pack = useLoaderData();

  const { _id, name, speed, description, price, realip, connection, img } =
    pack;
  const { youtube, facebook, bdix, rawInternet } = speed;
  const total = price + 100;

  return (
    <div>
      <Container>
        <Row>
          <Col lg="7">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Username</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>{name}</td>
                  <td>{price} Taka</td>
                  <td>{rawInternet}mbps</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col lg="5">
            <div>
              <div>
                <span>Subtotal</span> <span>{price} Taka</span>
              </div>
              <div>
                <span>Estimated Shipping</span> <span>100 Taka</span>
              </div>
              <div>
                <span>Vat & Tax</span> <span>5%</span>
              </div>
              <div>
                <span>Total</span> <span>{total} Taka</span>
              </div>
              <div>
                <Button>Proceed</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
