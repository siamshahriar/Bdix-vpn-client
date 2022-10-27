import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FaRegFilePdf } from "react-icons/fa";
import "./PackageDetails.css";
import { Table } from "react-bootstrap";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const PackageDetails = () => {
  const pack = useLoaderData();

  const { _id, name, speed, description, price, realip, connection, img } =
    pack;
  const { rawInternet } = speed;

  return (
    <div className=" mx-auto">
      <div className="d-flex justify-content-center mb-3">
        <Pdf targetRef={ref} filename={`${name}.pdf`}>
          {({ toPdf }) => (
            <>
              <h2 className="text-center ctname">
                Details of the Package
                <FaRegFilePdf
                  className="pdfIcon ms-2"
                  onClick={toPdf}
                ></FaRegFilePdf>
              </h2>
            </>
          )}
        </Pdf>
      </div>
      <div className="d-flex justify-content-center">
        <Card
          ref={ref}
          className="text-center custom_card"
          style={{ width: "28rem" }}
        >
          <Card.Img variant="top" style={{ height: "250px" }} src={img} />
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
                  <td>Real IP - {realip}</td>
                </tr>
                <tr>
                  <td>Connection - {connection}</td>
                </tr>
                <tr>
                  <th>Price - {price} Taka</th>
                </tr>

                <tr className="mt-5">
                  <span className="">
                    Description :{" "}
                    <span style={{ display: "block" }}>{description}</span> Taka
                  </span>
                </tr>
                <tr>
                  <th></th>
                </tr>
              </thead>
            </Table>
            <div className="my-3">
              <Link className="seeDetailsButton pkBtn" to={`/checkout/${_id}`}>
                Get premium access
              </Link>
            </div>
          </Card.Body>
        </Card>
      </div>

      {/* <Card style={{ width: "50%", margin: "0 auto" }} className="text-center">
        <Card.Header>{name}</Card.Header>
        <Card.Img className="img-fluid" variant="top" style={{}} src={img} />
        <Card.Body>
          <Card.Title className="mb-3">{name}</Card.Title>

          <Card.Text>
            <span>Real IP - {realip}</span>
          </Card.Text>
          <Card.Text>
            <span>Connection - {connection}</span>
          </Card.Text>
          <Card.Text>
            <span>Price - {price} Taka</span>
          </Card.Text>
          <Card.Text>
            <span>
              Description :{" "}
              <span style={{ display: "block" }}>{description}</span> Taka
            </span>
          </Card.Text>
          <Button variant="primary">
            <Link to={`/checkout/${_id}`}>Get premium access</Link>
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card> */}
    </div>
  );
};

export default PackageDetails;
