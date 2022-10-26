import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useLoaderData } from "react-router-dom";
import { Button, Card, Table } from "react-bootstrap";
import "./Checkout.css";

const Checkout = () => {
  const pack = useLoaderData();

  const { _id, name, speed, description, price, realip, connection, img } =
    pack;
  const { youtube, facebook, bdix, rawInternet } = speed;
  const total = price * (5 / 100) + price + 100;

  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col lg="7">
            <Table striped bordered hover responsive>
              <thead>
                <tr className="table-header">
                  <th>Image</th>
                  <th>Package</th>
                  <th>Speed</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan={2}>
                    <img
                      src={img}
                      style={{ height: "6vh" }}
                      className=""
                      alt=""
                    />
                  </td>
                  <td rowSpan={2}>{name}</td>
                  <td rowSpan={2}>{rawInternet}mbps</td>
                  <td rowSpan={2}>1</td>
                  <td rowSpan={2}>{price}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col lg="5">
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>{price} Taka</td>
                </tr>
                <tr>
                  <td>Estimated Shipping</td>
                  <td>100 Taka</td>
                </tr>
                <tr>
                  <td>Vat & Tax</td>
                  <td>5%</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>{total} Taka</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <div className="d-flex justify-content-center">
                      <Button className="chk-btn">Checkout</Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;
