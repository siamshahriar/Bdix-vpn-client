import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaRegFilePdf } from "react-icons/fa";

const PackageDetails = () => {
  const pack = useLoaderData();

  const { _id, name, speed, description, price, realip, connection, img } =
    pack;
  const { youtube, facebook, bdix, rawInternet } = speed;

  return (
    <div className=" mx-auto">
      <div className="d-flex justify-content-center mb-3">
        <h2 className="text-center ctname">
          Details of the Package <FaRegFilePdf></FaRegFilePdf>
        </h2>
      </div>

      <Card style={{ width: "50%", margin: "0 auto" }} className="text-center">
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
      </Card>
    </div>
  );
};

export default PackageDetails;
<h2>This is Package Details</h2>;
