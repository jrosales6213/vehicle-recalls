import React from "react";
import { Row, Col, Button } from "reactstrap";
import { recallReport } from "../api/EndPoints";

function Report() {
  return (
    <div className="resources container mt-4">
      <h1 className=" fw-bold">Report a Safety Problem</h1>
      <Row className="row">
        <Col className="col-md-7">
          <h2 className="featurette-heading text-report">
            Have you experienced a vehicle, tire, car seat, or equipment safety
            problem that could be a safety defect?
          </h2>
          <p className="lead">
            If so, you can file a complaint that we will carefully review — like
            we do with every safety problem submitted to NHTSA.
          </p>
          <Button
            id="report-btn"
            className="btn btn-lg px-4 me-md-2 m-3"
            href={recallReport}
            target="_blank"
          >
            Report a Problem
          </Button>
        </Col>
        <div className="col-md-5">
          <img
            id="report-img"
            className="featurette-image img-fluid mx-auto m-4"
            alt="500x500"
            // style="width: 500px; height: 500px;"
            src="https://file.kbb.com/kbb/images/ownership/havearecallillustration-bluebg.png"
            data-holder-rendered="true"
          />
        </div>
      </Row>
    </div>
  );
}

export default Report;
