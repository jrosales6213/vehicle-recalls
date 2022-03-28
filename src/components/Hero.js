import React from "react";
import {Col, Row, Button } from "reactstrap";


function HeroComponent() {
    return (

     <div className="container hero col-xxl px-4 py-5">
        <Row className="flex-lg-row-reverse align-items-center g-5 py-5">
            <Col className="col-10 col-sm-8 col-lg-6">
            <img id="hero-image" class="d-block mx-lg-auto img-fluid" width="700" height="500" loading="lazy"/>
            </Col>
            <Col className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">Vehicle Safety</h1>
                <p className="lead">Manufacturers who determine that a product or piece of original equipment either has a safety defect, or is not in compliance with federal safety standards, are required to notify NHTSA within five business days. Find out if your vehicle has any recalls.</p>
            <div className ="d-grid gap-2 d-md-flex justify-content-md-start">
                <Button id="btn-search" type="button" className="btn btn-lg px-4 me-md-2">Search</Button>
                <Button type="button" className="btn btn-outline-secondary btn-lg px-4">Learn More</Button>
            </div>
            </Col>
        </Row>
    </div>
    )
}

export default HeroComponent;